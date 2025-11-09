#!/usr/bin/env node
import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';

(async () => {
  // Find all markdown files (exclude README, OVERVIEW, changelog, INDEX, CONTRIBUTING)
  const files = await globby([
    '**/*.md',
    '!README.md',
    '!OVERVIEW.md',
    '!changelog.md',
    '!INDEX.md',
    '!CONTRIBUTING.md',
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
      order: typeof data.order === 'number' ? data.order : 999,
      category: data.category || null,
      status: data.status || 'complete',
      depth: path.split('/').length - 1,
      parts: path.split('/')
    };
  });

  // Group by top-level directory
  const grouped = {};
  const mainSections = [
    'basic-sciences',
    'pathology',
    'pharmacology',
    'clinical-medicine',
    'surgery',
    'emergency-critical-care',
    'preventive-medicine',
    'specialized-fields',
    'clinical-skills',
    'ethics-professionalism'
  ];

  // Initialize groups
  for (const section of mainSections) {
    grouped[section] = [];
  }
  grouped['other'] = [];

  // Categorize files
  for (const doc of docs) {
    const topDir = doc.parts[0];
    if (grouped[topDir]) {
      grouped[topDir].push(doc);
    } else {
      grouped['other'].push(doc);
    }
  }

  // Helper function to get status emoji
  const getStatusEmoji = (status) => {
    switch (status) {
      case 'complete': return '✅';
      case 'in-progress': return '🚧';
      case 'planned': return '📝';
      default: return '';
    }
  };

  // Helper function to format section name
  const formatSectionName = (section) => {
    return section.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Build hierarchical structure
  const buildHierarchy = (docs) => {
    // Sort by path depth, then order, then title
    docs.sort((a, b) => {
      if (a.depth !== b.depth) return a.depth - b.depth;
      if (a.order !== b.order) return a.order - b.order;
      return a.title.localeCompare(b.title);
    });

    return docs;
  };

  // Generate header section
  let lines = [
    '# Medical Science Study Notes',
    '',
    '> Comprehensive medical education study notes covering the complete five-year medical degree curriculum',
    '',
    '## 🎯 Purpose',
    '',
    'This repository contains systematically organized, evidence-based content across all major medical domains from basic sciences through clinical specialties. It serves as a comprehensive learning resource for medical students, residents, and healthcare professionals.',
    '',
    '**Current Status**: Phase 1 Complete - Basic sciences, pathology, and clinical medicine foundations established.',
    '',
    '**Last Updated**: January 2025',
    '',
    '## 📖 How to Navigate',
    '',
    '- **By System**: Use the Table of Contents below to explore content organized by medical discipline',
    '- **By Status**: Look for status indicators:',
    '  - ✅ Complete: Comprehensive content available',
    '  - 🚧 In Progress: Content being developed',
    '  - 📝 Planned: Placeholder for future content',
    '- **By Directory**: Each main section has a 📁 README file with detailed overview and guidance',
    '- **Full Overview**: See [OVERVIEW.md](OVERVIEW.md) for complete curriculum structure',
    '',
    '## 📊 Quick Links',
    '',
    '- [Complete Curriculum Overview](OVERVIEW.md)',
    '- [Alphabetical Topic Index](INDEX.md)',
    '- [Change History](changelog.md)',
    '- [Contributing Guidelines](CONTRIBUTING.md)',
    '',
    '## 📚 Table of Contents',
    ''
  ];

  // Add each main section
  for (const section of mainSections) {
    const sectionDocs = grouped[section];
    if (sectionDocs.length === 0) continue;

    const sectionTitle = formatSectionName(section);
    lines.push(`## ${sectionTitle}`, '');

    const sorted = buildHierarchy(sectionDocs);

    for (const doc of sorted) {
      const status = getStatusEmoji(doc.status);
      const indent = '  '.repeat(doc.depth);
      const displayTitle = doc.path.endsWith('README.md')
        ? `📁 ${doc.title}`
        : doc.title;

      lines.push(`${indent}- [${displayTitle}](${doc.path}) ${status}`.trim());
    }

    lines.push('');
  }

  // Add other files if any
  if (grouped['other'].length > 0) {
    lines.push('## Other', '');
    for (const doc of buildHierarchy(grouped['other'])) {
      const status = getStatusEmoji(doc.status);
      const indent = '  '.repeat(doc.depth);
      lines.push(`${indent}- [${doc.title}](${doc.path}) ${status}`.trim());
    }
    lines.push('');
  }

  // Write README.md
  fs.writeFileSync('README.md', lines.join('\n') + '\n');
  console.log(`✅ README.md updated with ${docs.length} entries across ${mainSections.length} sections.`);
})();