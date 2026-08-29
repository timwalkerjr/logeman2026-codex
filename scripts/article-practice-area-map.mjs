import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const articlePracticeAreaMap = {
  '3-rules-that-apply-to-michigan-wrongful-death-lawsuits': 'wrongful-death',
  'accident-victim-compensation-for-traumatic-brain-injury': 'personal-injury-lawsuits-involving-traumatic-brain-injury',
  'can-i-sue-for-a-slip-and-fall-accident-in-michigan': 'premises-liability-law-in-michigan',
  'car-accident-insurance-and-personal-injury-claims-in-michigan': 'michigan-no-fault-insurance-claims',
  'car-accident-statute-of-limitations-in-michigan': 'car-accidents',
  'common-mistakes-to-avoid-when-pursuing-a-personal-injury-claim-in-michigan': 'car-accidents',
  'do-i-need-a-personal-injury-lawyer-ann-arbor-mi': 'car-accidents',
  'faqs-regarding-michigan-s-new-auto-insurance-law': 'michigan-no-fault-insurance-claims',
  'frequently-asked-questions-about-michigan-s-pip-benefits': 'michigan-no-fault-insurance-claims',
  'how-can-pedestrian-fault-impact-injury-lawsuits': 'pedestrian-accidents',
  'how-do-you-calculate-pain-suffering-damages-in-a-personal-injury-lawsuit': 'car-accidents',
  'how-much-does-it-cost-to-hire-a-michigan-personal-injury-lawyer': 'car-accidents',
  'how-pain-and-suffering-damages-are-calculated-in-michigan': 'car-accidents',
  'how-to-calculate-the-value-of-your-personal-injury-case': 'car-accidents',
  'how-to-hire-a-personal-injury-attorney': 'car-accidents',
  'how-to-obtain-compensation-for-a-michigan-car-accident-involving-personal-injury': 'car-accidents',
  'how-underinsured-motorist-coverage-protects-you-and-your-family': 'uninsured-underinsured-motorist-accidents',
  'if-the-car-accident-was-not-my-fault-should-i-still-consult-with-an-accident-attorney': 'car-accidents',
  'important-questions-to-ask-before-you-hire-a-personal-injury-law-firm': 'car-accidents',
  'landlord-s-legal-duty-to-protect-tenants-from-personal-injury': 'premises-liability-law-in-michigan',
  'legal-options-for-injuries-caused-by-defective-traffic-signals': 'car-accidents',
  'michigan-car-accident-laws-personal-injury-lawyers-ann-arbor': 'car-accidents',
  'no-fault-benefit-coverages-under-the-new-no-fault-law---starting-july-2-2020': 'michigan-no-fault-insurance-claims',
  'pedestrian-accidents-causing-personal-injury-to-college-students': 'pedestrian-accidents',
  'personal-injury-cases-involving-out-of-state-residents': 'michigan-no-fault-insurance-claims',
  'personal-injury-lawsuits-and-the-michigan-seat-belt-law': 'car-accidents',
  'personal-injury-lawsuits-involving-head-injuries-with-a-brain-bleed': 'personal-injury-lawsuits-involving-traumatic-brain-injury',
  'personal-injury-settlements-for-minor-children-in-michigan': 'car-accidents',
  'protect-yourself-from-automobile-negligence-lawsuits---ann-arbor': 'car-accidents',
  'replacement-service-claims---insurance-company-s-best-defense-to-no-fault-lawsuit': 'michigan-no-fault-insurance-claims',
  'selecting-a-personal-injury-law-firm-in-michigan-ann-arbor': 'car-accidents',
  'should-i-hire-an-attorney-for-a-car-accident-personal-injury-lawyers-ann-arbor': 'car-accidents',
  'should-senior-citizens-opt-out-of-pip-coverage---medicare-vs-pip': 'michigan-no-fault-insurance-claims',
  'should-you-hire-a-case-manager-if-you-are-injured-in-an-auto-accident': 'car-accidents',
  'smart-choices-under-the-new-no-fault-law-ann-arbor-mi': 'michigan-no-fault-insurance-claims',
  'the-importance-of-taking-photographs-after-a-car-accident-in-michigan-personal-injury': 'car-accidents',
  'tips-for-buying-auto-insurance-in-michigan': 'michigan-no-fault-insurance-claims',
  'types-of-compensation-after-a-car-accident-in-michigan': 'car-accidents',
  'understanding-the-steps-involved-in-pursuing-a-personal-injury-lawsuit-ann-arbor': 'car-accidents',
  'uninsured-and-underinsured-motorist-coverage-and-car-accidents': 'uninsured-underinsured-motorist-accidents',
  'what-are-the-types-of-damages-recoverable-in-personal-injury-lawsuits-ann-arbor-2ea2b': 'car-accidents',
  'what-damages-are-recoverable-in-a-wrongful-death-injury-case': 'wrongful-death',
  'what-does-it-mean-when-people-say-michigan-is-a-no-fault-state': 'michigan-no-fault-insurance-claims',
  'what-steps-should-you-take-after-a-car-accident-involving-personal-injury': 'car-accidents',
  'what-to-do-after-a-car-accident': 'car-accidents',
  'what-to-do-if-you-are-injured-in-a-hit-and-run-accident-ded4e': 'uninsured-underinsured-motorist-accidents',
  'who-pays-after-a-rideshare-collision': 'personal-injury-claims-involving-lyft-and-uber-drivers-in-michigan',
};

function applyMap() {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md')).sort();

  if (files.length !== Object.keys(articlePracticeAreaMap).length) {
    throw new Error(`Expected ${Object.keys(articlePracticeAreaMap).length} articles, found ${files.length}`);
  }

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const practiceArea = articlePracticeAreaMap[slug];
    if (!practiceArea) throw new Error(`No practice-area hero mapping for ${slug}`);

    const filePath = path.join(contentDir, file);
    let source = fs.readFileSync(filePath, 'utf8');
    const field = `heroPracticeArea: ${JSON.stringify(practiceArea)}`;

    if (/^heroPracticeArea:/m.test(source)) {
      source = source.replace(/^heroPracticeArea:.*$/m, field);
    } else {
      source = source.replace(/^(heroDescription:.*)$/m, `$1\n${field}`);
    }

    fs.writeFileSync(filePath, source, 'utf8');
  }

  console.log(`Mapped ${files.length} articles to practice-area heroes.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  applyMap();
}
