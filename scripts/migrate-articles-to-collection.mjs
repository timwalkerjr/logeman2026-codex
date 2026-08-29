import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'src', 'pages', 'articles');
const contentDir = path.join(projectRoot, 'src', 'content', 'articles');
const landingPath = path.join(projectRoot, 'src', 'pages', 'articles-posts.astro');

const defaultHeroImage = 'https://pagesmith-cdn.com/881ce63c/images/693497a35eaaff8688ef590f_relume-608351-1024.webp';
const defaultHeroSrcset = [
  'https://pagesmith-cdn.com/881ce63c/images/693497a35eaaff8688ef590f_relume-608351-640.webp 640w',
  'https://pagesmith-cdn.com/881ce63c/images/693497a35eaaff8688ef590f_relume-608351-1024.webp 1024w',
];

function evaluateString(expression) {
  return Function(`"use strict"; return (${expression});`)();
}

function readConstString(source, name) {
  const match = source.match(new RegExp(`const\\s+${name}\\s*=\\s*((?:"(?:\\\\.|[^"\\\\])*")|(?:'(?:\\\\.|[^'\\\\])*'))\\s*;`));
  return match ? evaluateString(match[1]) : '';
}

function readAttribute(tag, name, source) {
  const stringMatch = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  if (stringMatch) return stringMatch[1];

  const expressionMatch = tag.match(new RegExp(`\\b${name}=\\{([A-Za-z_$][\\w$]*)\\}`));
  if (expressionMatch) return readConstString(source, expressionMatch[1]);

  return '';
}

function extractArrayLiteral(source, variableName) {
  const declaration = new RegExp(`const\\s+${variableName}\\s*=\\s*\\[`, 'm').exec(source);
  if (!declaration) return [];

  const start = source.indexOf('[', declaration.index);
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];

    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }

    if (character === '"' || character === "'" || character === '`') {
      quote = character;
      continue;
    }

    if (character === '[') depth += 1;
    if (character === ']') {
      depth -= 1;
      if (depth === 0) {
        return Function(`"use strict"; return (${source.slice(start, index + 1)});`)();
      }
    }
  }

  throw new Error(`Unclosed array assigned to ${variableName}`);
}

function stripSeoSuffix(value) {
  return value.split(' | ')[0].trim();
}

function yamlValue(value) {
  return JSON.stringify(value);
}

function normalizeBody(value) {
  // ArticleContent children are indented four spaces inside the Astro page.
  // Leaving that indentation after blank lines makes Markdown render the raw
  // HTML as code blocks, so remove only the shared component-level indent.
  return value.trim().split('\n').map((line) => line.replace(/^ {4}/, '')).join('\n');
}

const landingSource = fs.readFileSync(landingPath, 'utf8');
const featuredArticles = extractArrayLiteral(landingSource, 'recentArticles');
const featuredBySlug = new Map(featuredArticles.map((article, index) => [
  article.url.replace(/^\/articles\//, '').replace(/\/$/, ''),
  { ...article, featuredOrder: index + 1 },
]));

const sourceFiles = fs.readdirSync(sourceDir)
  .filter((file) => file.endsWith('.astro') && file !== '[slug].astro')
  .sort();

if (sourceFiles.length !== 47) {
  throw new Error(`Expected 47 article source pages, found ${sourceFiles.length}`);
}

const records = sourceFiles.map((file) => {
  const slug = file.replace(/\.astro$/, '');
  const source = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const layoutTag = source.match(/<BaseLayout\b([\s\S]*?)>/)?.[1] ?? '';
  const heroTag = source.match(/<ArticleHero\b([\s\S]*?)\/>/)?.[1] ?? '';
  const contentMatch = source.match(/<ArticleContent\b([^>]*)>([\s\S]*?)<\/ArticleContent>/);

  if (!contentMatch) throw new Error(`Missing ArticleContent body in ${file}`);

  const body = normalizeBody(contentMatch[2]);
  if (/[{}]/.test(body) || /<[A-Z][A-Za-z]*/.test(body)) {
    throw new Error(`Article body contains unmigrated Astro expressions or components in ${file}`);
  }

  const title = readAttribute(layoutTag, 'title', source) || readConstString(source, 'title');
  const description = readAttribute(layoutTag, 'description', source) || readConstString(source, 'description');
  const contentTitle = readAttribute(contentMatch[1], 'title', source);
  const heroTitle = readAttribute(heroTag, 'title', source) || contentTitle || stripSeoSuffix(title);
  const canonicalUrl = readAttribute(layoutTag, 'canonicalUrl', source) || `https://www.logeman.com/articles/${slug}/`;
  const faqVariable = source.match(/<ArticleFAQ\b[^>]*items=\{([A-Za-z_$][\w$]*)\}/)?.[1];
  const faqs = faqVariable ? extractArrayLiteral(source, faqVariable) : [];
  const featured = featuredBySlug.get(slug);

  if (!title || !description || !heroTitle || faqs.length === 0) {
    throw new Error(`Incomplete article mapping in ${file}: title=${Boolean(title)}, description=${Boolean(description)}, heroTitle=${Boolean(heroTitle)}, faqs=${faqs.length}`);
  }

  return {
    slug,
    data: {
      title,
      description,
      heroTitle,
      heroEyebrow: '',
      heroDescription: description,
      heroImage: defaultHeroImage,
      heroImageSrcset: defaultHeroSrcset,
      heroImageAlt: 'Lady Justice holding the scales of justice',
      canonicalUrl,
      excerpt: featured?.excerpt || description,
      cardImage: featured?.image || defaultHeroImage,
      featuredOrder: featured?.featuredOrder,
      faqs,
      statsVariant: source.includes('<ArticleStats />') ? 'article' : 'bar',
      formVariant: source.includes('<FreeConsultationForm />') ? 'home' : 'article',
      testimonialsVariant: source.includes('<ArticleTestimonials />') ? 'article' : 'home',
      mapVariant: source.includes('<ArticleMap />') ? 'article' : source.includes('<LocationMap />') ? 'location' : 'none',
    },
    body,
  };
});

fs.mkdirSync(contentDir, { recursive: true });

for (const record of records) {
  const frontmatter = Object.entries(record.data)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${yamlValue(value)}`)
    .join('\n');

  fs.writeFileSync(
    path.join(contentDir, `${record.slug}.md`),
    `---\n${frontmatter}\n---\n\n${record.body}\n`,
    'utf8',
  );
}

for (const file of sourceFiles) {
  fs.unlinkSync(path.join(sourceDir, file));
}

console.log(`Migrated ${records.length} article pages into src/content/articles.`);
console.log(`Preserved ${records.reduce((total, record) => total + record.data.faqs.length, 0)} FAQ items.`);
console.log(`Mapped ${featuredArticles.length} existing landing-page card images and excerpts.`);
