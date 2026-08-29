import fs from 'node:fs';
import path from 'node:path';
import { articleCardImageMap } from './article-card-image-map.mjs';

const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
const articleFiles = fs.readdirSync(contentDir)
  .filter((file) => file.endsWith('.md'))
  .sort();

if (articleFiles.length !== 47) {
  throw new Error(`Expected 47 article records, found ${articleFiles.length}`);
}

if (Object.keys(articleCardImageMap).length !== articleFiles.length) {
  throw new Error(`Expected 47 article image mappings, found ${Object.keys(articleCardImageMap).length}`);
}

for (const file of articleFiles) {
  const slug = file.replace(/\.md$/, '');
  const image = articleCardImageMap[slug];
  const filePath = path.join(contentDir, file);
  const source = fs.readFileSync(filePath, 'utf8');

  if (!image) throw new Error(`Missing live Webflow card image for ${slug}`);
  if (!/^cardImage:/m.test(source)) throw new Error(`Missing cardImage field in ${file}`);

  fs.writeFileSync(
    filePath,
    source.replace(/^cardImage:.*$/m, `cardImage: ${JSON.stringify(image)}`),
    'utf8',
  );
}

console.log(`Applied ${articleFiles.length} live Webflow article card images.`);
