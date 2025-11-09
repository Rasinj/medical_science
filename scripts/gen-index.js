#!/usr/bin/env node
import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';

(async () => {
  // Find all content markdown files
  const files = await globby([
    '**/*.md',
    '!README.md',
    '!OVERVIEW.md',
    '!INDEX.md',
    '!CONTRIBUTING.md',
    '!changelog.md',
    '!**/README.md',  // Exclude all README files
    '!node_modules/**',
    '!.github/**',
    '!docs/**'
  ]);

  // Load metadata
  const docs = files.map(path => {
    const content = fs.readFileSync(path, 'utf8');
    const { data } = matter(content);

    return {
      path,
      title: data.title || path.replace(/\.md$/, '').replace(/.*\//, ''),
      status: data.status || 'complete',
      category: data.category || 'Other'
    };
  });

  // Sort alphabetically by title
  docs.sort((a, b) => a.title.localeCompare(b.title));

  // Helper function to get status emoji
  const getStatusEmoji = (status) => {
    switch (status) {
      case 'complete': return '✅';
      case 'in-progress': return '🚧';
      case 'planned': return '📝';
      default: return '';
    }
  };

  // Generate index
  let lines = [
    '# Alphabetical Topic Index',
    '',
    '> Quick reference index of all medical topics in this repository',
    '',
    '**Legend**: ✅ Complete | 🚧 In Progress | 📝 Planned',
    '',
    '---',
    ''
  ];

  // Group by first letter
  let currentLetter = '';

  for (const doc of docs) {
    const firstLetter = doc.title.charAt(0).toUpperCase();

    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      lines.push('', `## ${currentLetter}`, '');
    }

    const status = getStatusEmoji(doc.status);
    const category = doc.category ? ` _[${doc.category}]_` : '';
    lines.push(`- **[${doc.title}](${doc.path})** ${status}${category}`);
  }

  lines.push('', '---', '', `**Total Topics**: ${docs.length}`, '');

  // Write INDEX.md
  fs.writeFileSync('INDEX.md', lines.join('\n') + '\n');
  console.log(`✅ INDEX.md created with ${docs.length} topics.`);
})();
