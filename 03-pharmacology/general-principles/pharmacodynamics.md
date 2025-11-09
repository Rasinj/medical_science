---
title: Pharmacodynamics - Drug Actions and Effects
type: content
phase: 1
status: complete
priority: high
tags: [pharmacodynamics, dose-response, receptors, agonists, antagonists, signal-transduction, therapeutic-index]
created: 2025-11-08
last_modified: 2025-11-08
---

# Pharmacodynamics - Drug Actions and Effects

## Introduction

Pharmacodynamics describes "what the drug does to the body" - the biochemical and physiological effects of drugs and their mechanisms of action. It encompasses drug-receptor interactions, dose-response relationships, and the therapeutic and toxic effects of medications.

## Core Concept

Pharmacodynamics answers critical clinical questions:
- How does the drug produce its effect?
- What is the relationship between dose and response?
- How do different drugs compare in potency and efficacy?
- What is the margin of safety?
- Why do adverse effects occur?

---

## Drug-Receptor Interactions

### Receptors

**Definition**: Macromolecular components of cells that drugs bind to produce effects

**Characteristics**:
1. **Specificity**: Selective binding to particular drugs/ligands
2. **Sensitivity**: Respond to low concentrations
3. **Saturability**: Limited number of binding sites
4. **Reversibility**: Most drug-receptor binding is reversible

### Types of Drug Targets

#### 1. Receptors (Most Common)

**G-Protein Coupled Receptors (GPCRs)**
- Largest family (~40% of drug targets)
- Seven transmembrane domains
- Coupled to G-proteins (Gs, Gi, Gq)
- Signal through second messengers

**Structure**: Extracellular binding site → 7 transmembrane helices → Intracellular G-protein coupling

**Signal Transduction**:
- **Gs**: Activates adenylyl cyclase → ↑cAMP → PKA activation
- **Gi**: Inhibits adenylyl cyclase → ↓cAMP
- **Gq**: Activates phospholipase C → ↑IP3 and DAG → ↑Ca2+, PKC

**Examples**:
- β-adrenergic receptors (Gs): Epinephrine, albuterol
- α2-adrenergic receptors (Gi): Clonidine
- α1-adrenergic receptors (Gq): Phenylephrine
- Muscarinic M2 (Gi): Acetylcholine (heart)
- Muscarinic M1, M3 (Gq): Acetylcholine (smooth muscle)
- Histamine H1 (Gq): Antihistamines

**Ligand-Gated Ion Channels (Ionotropic Receptors)**
- Direct channel opening upon ligand binding
- Millisecond response time (fastest)
- Mediate fast neurotransmission

**Examples**:
- Nicotinic receptors (Na+/K+): Acetylcholine, nicotine
- GABA-A receptors (Cl-): Benzodiazepines, barbiturates, alcohol
- NMDA receptors (Ca2+): Glutamate, ketamine (antagonist)
- Glycine receptors (Cl-): Strychnine (antagonist)
- 5-HT3 receptors: Ondansetron (antagonist)

**Nuclear Receptors (Intracellular)**
- Lipophilic ligands
- Gene transcription regulation
- Delayed onset (hours to days)
- Prolonged duration

**Examples**:
- Steroid receptors: Cortisol, estrogen, testosterone, progesterone
- Thyroid hormone receptors: T3, T4
- Vitamin D receptors: Calcitriol
- Retinoid receptors: Vitamin A
- PPAR receptors: Thiazolidinediones (diabetes)

**Receptor Tyrosine Kinases (RTKs)**
- Growth factor receptors
- Autophosphorylation upon ligand binding
- Signal through MAP kinase pathways
- Cancer drug targets

**Examples**:
- Insulin receptor
- EGF receptor: Erlotinib, gefitinib (inhibitors)
- HER2: Trastuzumab (antibody)
- VEGF receptor: Bevacizumab

#### 2. Enzymes

**Mechanism**: Drugs inhibit or activate enzymes

**Examples**:
- **COX enzymes**: NSAIDs (aspirin, ibuprofen)
- **ACE**: ACE inhibitors (enalapril, lisinopril)
- **Carbonic anhydrase**: Acetazolamide
- **Xanthine oxidase**: Allopurinol
- **Phosphodiesterase-5**: Sildenafil
- **HMG-CoA reductase**: Statins
- **Cyclooxygenase**: NSAIDs, aspirin

**Irreversible Inhibition**: Aspirin (COX), omeprazole (H+/K+ ATPase)
**Reversible Inhibition**: Most other enzyme inhibitors

#### 3. Transporters/Carriers

**Mechanism**: Block or modulate transport proteins

**Examples**:
- **Na+/K+/2Cl- cotransporter**: Loop diuretics (furosemide)
- **Na+/Cl- cotransporter**: Thiazides (HCTZ)
- **Proton pump (H+/K+ ATPase)**: PPIs (omeprazole)
- **SGLT2**: Empagliflozin, dapagliflozin
- **Serotonin transporter (SERT)**: SSRIs
- **Norepinephrine transporter (NET)**: TCAs, SNRIs
- **Dopamine transporter (DAT)**: Cocaine, methylphenidate

#### 4. Ion Channels

**Mechanism**: Block or modulate voltage-gated channels

**Examples**:
- **L-type Ca2+ channels**: Calcium channel blockers (amlodipine, verapamil)
- **Na+ channels**: Local anesthetics (lidocaine), antiarrhythmics
- **K+ channels**: Antiarrhythmics (sotalol), sulfonylureas
- **CFTR chloride channel**: Ivacaftor (cystic fibrosis)

#### 5. Structural Proteins

**Examples**:
- **Tubulin**: Colchicine, vinca alkaloids, taxanes
- **Actin/myosin**: Blebbistatin (research)

#### 6. DNA/RNA

**Examples**:
- **DNA alkylation**: Cyclophosphamide
- **DNA intercalation**: Doxorubicin
- **Topoisomerase inhibition**: Fluoroquinolones, etoposide
- **DNA synthesis**: Methotrexate (DHFR inhibitor)

---

## Drug-Receptor Binding

### Law of Mass Action

```
Drug + Receptor ⇌ Drug-Receptor Complex → Response

[D] + [R] ⇌ [DR] → Effect
```

**At equilibrium**:
- Kon × [D] × [R] = Koff × [DR]
- Kd = Koff/Kon = [D] × [R] / [DR]

**Kd (Dissociation Constant)**:
- Drug concentration at which 50% of receptors occupied
- **Lower Kd = Higher affinity** (important concept!)
- Units: M, nM, µM

### Occupancy Theory

**Fractional Occupancy**:
```
f = [DR] / ([R] + [DR]) = [D] / ([D] + Kd)
```

**Assumptions**:
1. Response proportional to receptor occupancy
2. Maximum response when all receptors occupied
3. Reversible binding

### Spare Receptors

**Concept**: Maximum response achieved with <100% receptor occupancy

**Implications**:
- EC50 < Kd
- Allows for signal amplification
- Common in highly sensitive systems
- Example: Insulin receptors

---

## Types of Drug Actions

### Agonists

**Definition**: Drugs that bind receptors and activate them (produce response)

**Full Agonist**:
- Maximum efficacy (Emax = 100%)
- Can produce maximal tissue response
- Examples: Isoproterenol (β-agonist), morphine (μ-opioid)

**Partial Agonist**:
- Submaximal efficacy (Emax < 100%)
- Cannot produce maximal response even at full occupancy
- Lower intrinsic activity
- Can act as antagonist in presence of full agonist
- Examples: Buprenorphine (μ-opioid), aripiprazole (dopamine D2)

**Inverse Agonist**:
- Binds receptor and produces opposite effect to agonist
- Reduces constitutive (baseline) receptor activity
- Examples: Some antihistamines, β-carbolines at GABA receptors

**Clinical Significance of Partial Agonists**:
- **Ceiling effect**: Less toxicity risk
- **Dual action**: Agonist when alone, antagonist with full agonist present
- **Buprenorphine**: Safer in overdose, blocks full opioid agonists

### Antagonists

**Definition**: Drugs that bind receptors without activating them

#### Competitive Antagonists

**Characteristics**:
- Bind same site as agonist
- Reversible binding (usually)
- Overcome by increasing agonist concentration
- **Parallel rightward shift** of dose-response curve
- No change in Emax
- Increase in EC50

**Examples**:
- Atropine (muscarinic antagonist)
- Propranolol (β-blocker)
- Naloxone (opioid antagonist)
- Flumazenil (benzodiazepine antagonist)
- Antihistamines (H1 blockers)

**Surmountable**: Can be overcome with high agonist doses

#### Non-Competitive Antagonists

**Characteristics**:
- Bind different site than agonist (allosteric)
- Not overcome by increasing agonist
- **Decrease in Emax** (curve shifts down)
- No change in EC50 (or may increase)

**Types**:
1. **Irreversible**: Covalent binding (aspirin-COX)
2. **Allosteric**: Different binding site
3. **Channel blockers**: Physically block channel

**Examples**:
- Phenoxybenzamine (irreversible α-blocker)
- Aspirin (irreversible COX inhibitor)
- Ketamine (NMDA channel blocker)

**Insurmountable**: Cannot be overcome by increasing agonist

#### Physiological Antagonism

**Definition**: Two drugs produce opposite physiological effects

**Mechanism**: Act on different receptors/pathways

**Examples**:
- Histamine (vasodilation) vs. Norepinephrine (vasoconstriction)
- Insulin (↓glucose) vs. Glucagon (↑glucose)

#### Chemical Antagonism (Inactivation)

**Definition**: Direct chemical interaction between agonist and antagonist

**Examples**:
- Protamine (neutralizes heparin)
- Chelating agents: EDTA, dimercaprol
- Antacids (neutralize gastric acid)

---

## Dose-Response Relationships

### Graded Dose-Response Curve

**Description**: Continuous response in single subject/tissue as dose increases

**Key Parameters**:

**EC50 (Effective Concentration 50%)**:
- Concentration producing 50% of maximum response
- Measure of potency
- Lower EC50 = More potent

**Emax (Maximum Effect)**:
- Maximum response achievable
- Measure of efficacy
- Related to intrinsic activity

**Shape**:
- **Hyperbolic curve** (linear scale)
- **Sigmoidal curve** (log scale) - preferred for analysis

**Equation (log scale)**:
```
E = Emax × [D]ⁿ / (EC50ⁿ + [D]ⁿ)

n = Hill coefficient (slope factor)
```

### Potency vs. Efficacy

**Potency**: Amount of drug needed to produce effect
- Determined by EC50
- Less clinically important
- Can be overcome by dose adjustment

**Efficacy**: Maximum effect a drug can produce
- Determined by Emax
- More clinically important
- Cannot be overcome by increasing dose

**Example**:
- Morphine: High potency, high efficacy
- Aspirin: Low potency (vs morphine), high efficacy (as analgesic)
- Buprenorphine: High potency, partial efficacy (partial agonist)

**Clinical Implication**: Choose drug based on efficacy needs, adjust dose for potency

### Quantal Dose-Response Curve

**Description**: All-or-none response in population

**Measured**: Percentage of population responding at each dose

**Key Parameters**:

**ED50 (Effective Dose 50%)**:
- Dose producing desired effect in 50% of population

**TD50 (Toxic Dose 50%)**:
- Dose producing toxicity in 50% of population

**LD50 (Lethal Dose 50%)**:
- Dose lethal to 50% of population
- Used in animal studies

### Therapeutic Index

**Definition**: Measure of drug safety

**Formula**:
```
Therapeutic Index (TI) = TD50 / ED50

Or: TI = LD50 / ED50
```

**Interpretation**:
- **High TI (>10)**: Wide margin of safety (penicillin ~100)
- **Low TI (<2)**: Narrow margin of safety (digoxin ~2)

**Clinical Significance**:
- **Narrow TI drugs**: Require careful dosing and monitoring
  - Warfarin, digoxin, lithium, phenytoin, theophylline
  - Small dose change → large effect change
  - Therapeutic drug monitoring indicated

- **Wide TI drugs**: Safer, flexible dosing
  - Penicillins, most cephalosporins
  - Large dose range without toxicity

**Certain Safety Factor (CSF)**:
```
CSF = LD1 / ED99
```
More stringent than TI (1% lethal dose / 99% effective dose)

---

## Receptor Regulation

### Desensitization (Tachyphylaxis)

**Definition**: Decreased response to drug with repeated/continuous exposure

**Mechanisms**:

1. **Receptor Phosphorylation**
   - GRKs (G-protein receptor kinases) phosphorylate receptor
   - β-arrestin binding uncouples from G-protein
   - Rapid (minutes)

2. **Receptor Internalization**
   - Endocytosis via clathrin-coated pits
   - Removes receptors from surface
   - Moderate time course (minutes to hours)

3. **Receptor Down-Regulation**
   - Decreased receptor synthesis
   - Increased receptor degradation
   - Slow (hours to days)

4. **Depletion of Mediators**
   - Neurotransmitter depletion
   - Example: Amphetamine (depletes catecholamines)

5. **Increased Metabolic Degradation**
   - Enzyme induction
   - Example: Barbiturates

6. **Physiological Adaptation**
   - Homeostatic counterregulation

**Clinical Examples**:
- **β-agonists**: Desensitization with continuous use (asthma)
- **Nitrates**: Tolerance requires nitrate-free interval
- **Opioids**: Tolerance develops to analgesia
- **Benzodiazepines**: Tolerance to sedation

**Management**:
- Drug holidays
- Intermittent dosing
- Dose escalation
- Combination therapy

### Sensitization (Up-Regulation)

**Definition**: Increased response with repeated exposure

**Mechanism**: Receptor up-regulation

**Clinical Examples**:
- **β-blocker withdrawal**: Receptor upregulation → rebound tachycardia/HTN
- **Antipsychotic withdrawal**: Dopamine receptor upregulation → dyskinesia
- **Chronic opioid use**: Paradoxical hyperalgesia

**Clinical Significance**: Requires gradual drug withdrawal (tapering)

---

## Signal Transduction

### Second Messenger Systems

#### cAMP Pathway

**Activation**:
Agonist → GPCR → Gs → Adenylyl cyclase → ↑cAMP → PKA → Phosphorylation

**Effects**:
- Cardiac muscle: ↑contractility, ↑rate
- Smooth muscle: Relaxation
- Metabolism: Glycogenolysis, lipolysis

**Drugs Using This Pathway**:
- β-agonists (increase)
- Methylxanthines (PDE inhibitors, increase cAMP)
- Forskolin (research tool, activates adenylyl cyclase)

#### IP3/DAG Pathway

**Activation**:
Agonist → GPCR → Gq → Phospholipase C → PIP2 → IP3 + DAG

**IP3 Effects**:
- Releases Ca2+ from endoplasmic reticulum
- Ca2+ → calmodulin → effects

**DAG Effects**:
- Activates protein kinase C (PKC)
- PKC phosphorylates target proteins

**Drugs Using This Pathway**:
- α1-agonists
- M1, M3 muscarinic agonists
- H1 histamine

#### cGMP Pathway

**Activation**:
NO → Guanylyl cyclase → ↑cGMP → PKG → Effects

**Effects**:
- Smooth muscle relaxation (vascular, GI)
- Inhibits platelet aggregation

**Drugs**:
- Nitrates → NO → cGMP
- Sildenafil (PDE-5 inhibitor) → ↑cGMP

#### Calcium Signaling

**Sources of Ca2+**:
1. Extracellular (voltage-gated channels)
2. Intracellular stores (IP3, ryanodine receptors)

**Effects**:
- Muscle contraction
- Neurotransmitter release
- Enzyme activation
- Gene transcription

**Drugs**:
- CCBs: Decrease Ca2+ entry
- Dantrolene: Blocks ryanodine receptors

---

## Special Concepts

### Allosteric Modulation

**Definition**: Binding at site different from agonist, modulates response

**Positive Allosteric Modulators (PAMs)**:
- Enhance agonist effect
- Don't activate receptor alone
- Example: Benzodiazepines at GABA-A receptors

**Negative Allosteric Modulators (NAMs)**:
- Reduce agonist effect
- Example: Some NMDA antagonists

**Advantages**:
- More subtle modulation
- Ceiling effect (limited by endogenous agonist)
- Better safety profile

### Constitutive Activity

**Definition**: Receptor activity in absence of agonist

**Significance**:
- Basal tone in some systems
- Target for inverse agonists
- Some "antagonists" are actually inverse agonists

### Biased Signaling (Functional Selectivity)

**Definition**: Different ligands activate different signaling pathways at same receptor

**Mechanism**: Stabilize different receptor conformations

**Example**: Some β-blockers have β-arrestin-biased signaling

**Clinical Potential**: Selective activation of beneficial pathways

---

## Quantitative Pharmacology

### Schild Equation

**Purpose**: Analyze competitive antagonism

**Equation**:
```
log(DR - 1) = log[B] - log(Kd)

DR = dose ratio = EC50 with antagonist / EC50 without
[B] = antagonist concentration
```

**Schild Plot**: log(DR-1) vs log[B]
- Slope = 1 for competitive antagonist
- x-intercept = pA2 (antagonist affinity)

### Hill Equation

**Purpose**: Describe cooperative binding

**Equation**:
```
E = Emax × [D]ⁿ / (EC50ⁿ + [D]ⁿ)

n = Hill coefficient
```

**Hill Coefficient (n)**:
- n = 1: No cooperativity (simple binding)
- n > 1: Positive cooperativity (steep curve)
- n < 1: Negative cooperativity (shallow curve)

---

## Clinical Applications

### Drug Combinations

**Additive Effect**: Combined effect = sum of individual effects
- Example: Two analgesics

**Synergistic Effect**: Combined effect > sum of individual effects
- Example: Trimethoprim + sulfamethoxazole
- Example: β-lactam + aminoglycoside

**Antagonistic Effect**: Drugs oppose each other
- Can be therapeutic (naloxone for opioid overdose)
- Can be problematic (β-blocker + β-agonist)

**Potentiation**: One drug enhances another (without own effect)
- Example: Carbidopa potentiates levodopa

### Therapeutic Strategies

**Receptor Selectivity**:
- **β1-selective blockers**: Less bronchoconstriction
- **COX-2 selective NSAIDs**: Less GI toxicity
- **α1-selective blockers**: Less reflex tachycardia

**Avoiding Tolerance**:
- Drug holidays
- Intermittent dosing
- Rotating drugs
- Combination therapy

**Receptor Reserve**:
- Explains partial agonist utility
- Allows dose reduction in some cases

---

## Clinical Pearls

1. **Potency vs Efficacy**: Efficacy matters more clinically
2. **Competitive antagonists**: Rightward shift, same Emax
3. **Non-competitive antagonists**: Decreased Emax
4. **Partial agonists**: Ceiling effect, dual action
5. **Narrow TI drugs**: Require monitoring (digoxin, warfarin, phenytoin)
6. **Tolerance**: Common with chronic opioids, nitrates, benzos
7. **β-blocker withdrawal**: Taper to avoid rebound
8. **Spare receptors**: Allow signal amplification
9. **Inverse agonists**: Reduce constitutive activity
10. **Biased signaling**: Future of drug development

---

## Common Exam Questions

1. Compare potency and efficacy of two drugs from dose-response curves
2. Calculate therapeutic index from TD50/ED50
3. Predict effect of competitive vs non-competitive antagonist on curve
4. Identify partial agonist from dose-response characteristics
5. Explain mechanism of tolerance/tachyphylaxis
6. Describe signal transduction pathway for drug class
7. Differentiate agonist types (full, partial, inverse)
8. Interpret Schild plot for antagonist analysis

---

## Key Takeaways

1. **Pharmacodynamics** describes drug mechanisms and effects
2. **Receptors** are primary drug targets (GPCRs most common)
3. **Agonists** activate receptors; **antagonists** block them
4. **Competitive antagonists**: Surmountable, rightward shift
5. **Non-competitive antagonists**: Insurmountable, decreased Emax
6. **Partial agonists**: Submaximal efficacy, dual action
7. **Potency** (EC50) vs **Efficacy** (Emax): Efficacy more important
8. **Therapeutic Index**: Measure of safety (TD50/ED50)
9. **Narrow TI drugs**: Require careful dosing and monitoring
10. **Desensitization**: Decreased response with repeated exposure
11. **Signal transduction**: cAMP, IP3/DAG, cGMP pathways
12. **Receptor regulation**: Up-regulation, down-regulation, internalization

---

## Integration with Clinical Practice

### Prescribing Decisions

**Choose based on**:
1. Efficacy needed
2. Safety profile (TI)
3. Selectivity (avoid off-target effects)
4. Tolerance potential
5. Drug interactions

### Monitoring

**Narrow TI drugs**:
- Regular level checks
- Dose adjustments
- Watch for toxicity

**Chronic therapy**:
- Assess for tolerance
- Monitor for adverse effects
- Consider drug holidays if appropriate

### Patient Education

**Explain**:
- How drug works (mechanism)
- Why specific dosing matters
- Tolerance risk
- Importance of not stopping abruptly

---

## References

1. Katzung's Basic & Clinical Pharmacology, 15th Edition
2. Goodman & Gilman's Pharmacological Basis of Therapeutics, 14th Edition
3. Rang & Dale's Pharmacology, 9th Edition
4. Principles of Pharmacology: The Pathophysiologic Basis of Drug Therapy, Golan et al.
5. Molecular Pharmacology: From DNA to Drug Discovery, Kenakin
