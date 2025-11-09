#!/usr/bin/env python3
"""
Script to generate comprehensive medical education content files
for internal medicine subspecialties.

This creates template structures that can be filled with detailed content.
"""

import os

base_path = "/home/user/medical_science/04-clinical-medicine/internal-medicine"

# Define file templates
files_to_create = {
    'gastroenterology': [
        'peptic-ulcer-disease.md',
        'inflammatory-bowel-disease.md', 
        'liver-disease.md',
        'pancreatitis.md'
    ],
    'nephrology': [
        'claude.md',
        'acute-kidney-injury.md',
        'chronic-kidney-disease.md',
        'glomerular-diseases.md',
        'electrolyte-disorders.md'
    ],
    'endocrinology': [
        'claude.md',
        'diabetes-mellitus.md',
        'thyroid-disorders.md',
        'adrenal-disorders.md',
        'pituitary-disorders.md'
    ],
    'rheumatology': [
        'claude.md',
        'rheumatoid-arthritis.md',
        'systemic-lupus-erythematosus.md',
        'spondyloarthropathies.md',
        'crystal-arthropathies.md'
    ],
    'hematology': [
        'claude.md',
        'anemia.md',
        'coagulation-disorders.md',
        'leukemia.md',
        'lymphoma.md'
    ],
    'oncology': [
        'claude.md',
        'principles-of-oncology.md',
        'solid-tumors.md',
        'cancer-treatment.md',
        'palliative-oncology.md'
    ],
    'infectious-diseases': [
        'claude.md',
        'bacterial-infections.md',
        'viral-infections.md',
        'fungal-infections.md',
        'hiv-aids.md'
    ],
    'pulmonology': [
        'claude.md',
        'asthma-copd.md',
        'pneumonia.md',
        'interstitial-lung-disease.md',
        'pulmonary-embolism.md'
    ]
}

print(f"Files to create: {sum(len(v) for v in files_to_create.values())}")
for subdir in files_to_create:
    print(f"  {subdir}: {len(files_to_create[subdir])} files")

