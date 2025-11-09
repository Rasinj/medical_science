# Contributing to Medical Science Study Notes

Thank you for your interest in contributing to this medical education resource! This guide will help you understand our structure and standards.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Content Standards](#content-standards)
- [Frontmatter Requirements](#frontmatter-requirements)
- [File Naming Conventions](#file-naming-conventions)
- [How to Contribute](#how-to-contribute)
- [Testing Your Changes](#testing-your-changes)

## Getting Started

### Prerequisites

- Git installed on your system
- Node.js (v14 or higher) for TOC generation
- Basic knowledge of Markdown formatting
- Understanding of medical terminology and evidence-based medicine

### Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/Rasinj/medical_science.git
cd medical_science
```

2. Install dependencies:
```bash
npm install
```

3. Create a new branch for your contribution:
```bash
git checkout -b feature/your-topic-name
```

## File Structure

### Directory Organization

The repository is organized by medical discipline:

```
medical_science/
├── basic-sciences/         # Pre-clinical sciences
│   ├── anatomy/
│   ├── physiology/
│   ├── biochemistry/
│   ├── microbiology/
│   └── immunology/
├── pathology/             # Disease processes
│   ├── systemic-pathology/
│   ├── clinical-pathology/
│   └── forensic-pathology/
├── pharmacology/          # Drug therapy
├── clinical-medicine/     # Clinical specialties
│   ├── neurology/
│   ├── psychiatry/
│   └── ...
└── ...
```

### File Types

- **README.md**: Directory overview and navigation (one per directory)
- **Topic files**: Individual medical topic coverage (e.g., `stroke.md`, `cardiovascular-physiology.md`)
- **Special files**: OVERVIEW.md, INDEX.md, changelog.md, CONTRIBUTING.md

## Content Standards

### Required Sections

Each medical topic file should include:

1. **Overview**: Introduction and key concepts
2. **Pathophysiology**: Disease mechanisms and processes (where applicable)
3. **Clinical Presentation**: Signs, symptoms, manifestations
4. **Diagnosis**: Diagnostic criteria, tests, assessments
5. **Treatment**: Management approaches and therapeutics
6. **Complications**: Potential adverse outcomes
7. **Prognosis**: Expected outcomes
8. **Key Points**: Summary bullets (3-7 points)
9. **References**: Evidence-based sources

### Content Quality Requirements

- **Evidence-Based**: Cite current medical literature, guidelines, and textbooks
- **Accurate**: Verify all medical information against authoritative sources
- **Current**: Use up-to-date treatment protocols and diagnostic criteria
- **Clear**: Write for medical students and healthcare professionals
- **Comprehensive**: Cover all major aspects of the topic
- **Clinical Relevance**: Include practical applications and clinical correlations

### Writing Style

- Use clear, concise medical language
- Define technical terms when first introduced
- Include clinically relevant examples
- Use standard medical abbreviations (define on first use)
- Maintain professional, educational tone
- Avoid overly complex sentences

## Frontmatter Requirements

Every markdown file (except README.md) **must** include YAML frontmatter:

```yaml
---
title: "Cardiovascular Physiology"
order: 1
category: "Physiology"
status: "complete"
last_updated: "2025-01-09"
---
```

### Frontmatter Fields

| Field | Required | Description | Values |
|-------|----------|-------------|--------|
| `title` | Yes | Human-readable title | String |
| `order` | Yes | Sort order within category | Number (1-999) |
| `category` | Yes | Grouping category | String |
| `status` | Yes | Content completeness | `complete`, `in-progress`, `planned` |
| `last_updated` | Yes | Last modification date | YYYY-MM-DD |

### Status Guidelines

- **complete**: Comprehensive content with all required sections
- **in-progress**: Partial content, actively being developed
- **planned**: Placeholder for future content

## File Naming Conventions

### Rules

1. Use kebab-case (lowercase with hyphens): `cardiovascular-physiology.md`
2. Be descriptive but concise: `stroke.md` not `cerebrovascular-accident-ischemic-and-hemorrhagic.md`
3. Avoid special characters, spaces, or capital letters
4. Use medical topic names, not abbreviations: `myocardial-infarction.md` not `mi.md`

### Examples

✅ **Good**:
- `mood-disorders.md`
- `cardiovascular-physiology.md`
- `general-pathology.md`

❌ **Bad**:
- `Mood Disorders.md` (spaces, capitals)
- `CV_phys.md` (abbreviation, underscore)
- `mood&anxiety.md` (special character)

## How to Contribute

### Adding New Content

1. **Create the file** in the appropriate directory with proper naming
2. **Add frontmatter** with all required fields
3. **Write content** following the required sections
4. **Add references** citing authoritative sources
5. **Update TOC** (see below)

### Updating Existing Content

1. **Read the current content** thoroughly
2. **Make your changes** preserving the structure
3. **Update `last_updated`** field in frontmatter
4. **Update references** if adding new information

### Updating the Table of Contents

After adding or modifying files:

```bash
npm run gen-toc
```

This automatically regenerates the README.md with updated links and status indicators.

### Submitting Changes

1. **Test locally**:
```bash
# Generate TOC
npm run gen-toc

# Verify all links work (check README.md)
```

2. **Commit your changes**:
```bash
git add .
git commit -m "Add content for [topic name]"
```

3. **Push to your fork**:
```bash
git push origin feature/your-topic-name
```

4. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Rationale for additions/modifications
   - List of references used

## Testing Your Changes

### Checklist Before Submitting

- [ ] All files include proper YAML frontmatter
- [ ] File names follow kebab-case convention
- [ ] Content includes all required sections
- [ ] Medical information is accurate and cited
- [ ] References are current (within 5 years preferred)
- [ ] TOC has been regenerated (`npm run gen-toc`)
- [ ] All internal links work correctly
- [ ] Spelling and grammar checked
- [ ] No sensitive or copyrighted material included

### Testing Locally

1. **Check frontmatter parsing**:
```bash
node scripts/add-metadata.js
```

2. **Generate and review TOC**:
```bash
npm run gen-toc
cat README.md | head -50
```

3. **Verify file structure**:
```bash
find . -name "*.md" | grep -v node_modules | sort
```

## Medical Content Guidelines

### Citation Requirements

- **Textbooks**: Include author, title, edition, publisher, year
- **Journal Articles**: Include authors, title, journal, year, DOI/PMID
- **Guidelines**: Include organization, guideline title, year, URL
- **Websites**: Include organization, page title, access date, URL

### Example References

```markdown
## References

1. Kumar V, Abbas AK, Aster JC. Robbins and Cotran Pathologic Basis of Disease. 10th ed. Philadelphia: Elsevier; 2021.

2. Smith AB, Johnson CD. Novel approaches to cardiac arrest management. N Engl J Med. 2024;390(5):412-424. PMID: 12345678

3. American Heart Association. 2024 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. 2024. https://www.heart.org/guidelines

4. Centers for Disease Control and Prevention. Heart Disease Facts. Accessed January 9, 2025. https://www.cdc.gov/heartdisease/facts.htm
```

### Avoiding Copyright Issues

- **Do not copy** entire sections from textbooks or articles
- **Paraphrase** and synthesize information from multiple sources
- **Use original** explanations and examples
- **Cite all sources** appropriately
- **Create original** diagrams and tables

## Questions or Issues?

- **Documentation questions**: Open an issue labeled `question`
- **Content suggestions**: Open an issue labeled `enhancement`
- **Bug reports**: Open an issue labeled `bug`
- **General discussion**: Use GitHub Discussions

## License

By contributing, you agree that your contributions will be licensed under the same license as this project (MIT License).

---

**Thank you for helping build a comprehensive medical education resource!** 🏥📚
