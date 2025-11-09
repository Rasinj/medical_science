#!/usr/bin/env node
import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';

(async () => {
  // Find all markdown files except README.md, OVERVIEW.md, changelog.md, INDEX.md
  const files = await globby([
    '**/*.md',
    '!README.md',
    '!OVERVIEW.md',
    '!changelog.md',
    '!INDEX.md',
    '!CONTRIBUTING.md',
    '!node_modules/**',
    '!.github/**'
  ]);

  let updated = 0;

  for (const filepath of files) {
    const content = fs.readFileSync(filepath, 'utf8');
    const { data, content: body } = matter(content);

    let modified = false;

    // Add status field if missing
    if (!data.status) {
      // Determine status based on directory
      if (filepath.includes('basic-sciences') || filepath.includes('pathology') || filepath.includes('clinical-medicine')) {
        data.status = 'complete';
      } else if (filepath.includes('pharmacology') || filepath.includes('surgery') ||
                 filepath.includes('emergency-critical-care') || filepath.includes('ethics-professionalism')) {
        data.status = 'planned';
      } else {
        data.status = 'complete'; // default
      }
      modified = true;
    }

    // Add last_updated field if missing
    if (!data.last_updated) {
      data.last_updated = '2025-01-09';
      modified = true;
    }

    // Write back if modified
    if (modified) {
      const newContent = matter.stringify(body, data);
      fs.writeFileSync(filepath, newContent);
      updated++;
      console.log(`✓ Updated: ${filepath}`);
    }
  }

  console.log(`\n✅ Updated ${updated} files with metadata.`);
})();
