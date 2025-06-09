#!/usr/bin/env node
import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';

(async () => {
  // 1. find all markdown (but skip README itself)
  const files = await globby(['**/*.md', '!README.md', '!node_modules/**', '!.github/**']);

  // 2. load frontmatter, collect metadata
  const docs = files.map(path => {
    const { data } = matter(fs.readFileSync(path, 'utf8'));
    return {
      path,
      title: data.title || path.replace(/\.md$/, ''),
      order: typeof data.order === 'number' ? data.order : 999,
      category: data.category || null,
      depth: path.split('/').length - 1
    };
  });

  // 3. sort by category → order → title
  docs.sort((a, b) => {
    if (a.category !== b.category) return (a.category||'').localeCompare(b.category||'');
    if (a.order !== b.order)   return a.order - b.order;
    return a.title.localeCompare(b.title);
  });

  // 4. render TOC
  let lines = ['# 📚 Table of Contents', ''];
  let lastCat = null;
  for (let { path, title, category, depth } of docs) {
    if (category && category !== lastCat) {
      lines.push(`\n## ${category}\n`);
      lastCat = category;
    }
    const indent = '  '.repeat(depth);
    lines.push(`${indent}- [${title}](${path})`);
  }

  // 5. write README.md
  fs.writeFileSync('README.md', lines.join('\n') + '\n');
  console.log(`🌟 README.md updated with ${docs.length} entries.`);
})();