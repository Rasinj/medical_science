---
title: Pharmacokinetics - Drug Movement in the Body
type: content
phase: 1
status: complete
priority: high
tags: [pharmacokinetics, ADME, absorption, distribution, metabolism, excretion, bioavailability, clearance, half-life]
created: 2025-11-08
last_modified: 2025-11-08
---

# Pharmacokinetics - Drug Movement in the Body

## Introduction

Pharmacokinetics describes "what the body does to the drug" - the movement of drugs through the body over time. It encompasses four fundamental processes: Absorption, Distribution, Metabolism, and Excretion (ADME). Understanding pharmacokinetics is essential for determining appropriate drug dosing, predicting drug levels, and optimizing therapeutic outcomes.

## Core Concept

Pharmacokinetics answers critical clinical questions:
- How much drug reaches the systemic circulation?
- How is the drug distributed throughout the body?
- How quickly is the drug eliminated?
- How often should the drug be dosed?
- What factors affect drug levels in individual patients?

---

## Absorption

### Definition
Movement of drug from site of administration into systemic circulation.

### Routes of Administration

#### Enteral Routes

**Oral (PO)**
- Most common, convenient route
- Subject to first-pass metabolism
- Bioavailability typically <100%
- Affected by food, gastric pH, GI motility

**Sublingual (SL)**
- Rapid absorption via oral mucosa
- Bypasses first-pass metabolism
- Examples: Nitroglycerin, buprenorphine
- Limited to lipophilic drugs

**Rectal (PR)**
- Partially bypasses first-pass metabolism
- Useful when oral route unavailable
- Variable, incomplete absorption
- Examples: Diazepam, acetaminophen

#### Parenteral Routes

**Intravenous (IV)**
- 100% bioavailability (by definition)
- Immediate onset
- No absorption phase
- Allows precise dosing

**Intramuscular (IM)**
- Faster than oral, slower than IV
- Bioavailability ~75-100%
- Absorption depends on blood flow
- Examples: Vaccines, depot injections

**Subcutaneous (SC)**
- Slower absorption than IM
- Suitable for sustained release
- Examples: Insulin, heparin, biologics

#### Other Routes

**Inhalation**
- Rapid absorption from large alveolar surface
- Direct delivery to lungs
- Examples: Bronchodilators, anesthetics

**Transdermal**
- Sustained, controlled release
- Bypasses first-pass metabolism
- Examples: Nicotine, fentanyl, hormones
- Limited to lipophilic, potent drugs

**Topical**
- Local effect, minimal systemic absorption
- Used for skin, eye, ear conditions

### Factors Affecting Absorption

#### Drug Properties
1. **Lipophilicity**: Lipophilic drugs cross membranes easily
2. **Molecular Size**: Small molecules absorbed better
3. **Ionization State**: Determined by pKa and pH
   - Weak acids absorbed in stomach (low pH)
   - Weak bases absorbed in intestine (higher pH)
4. **Formulation**: Immediate vs. extended release

#### Physiological Factors
1. **Blood Flow**: Higher flow → faster absorption
2. **Surface Area**: Larger area → more absorption
3. **Contact Time**: Longer contact → more absorption
4. **pH at Site**: Affects ionization

#### Patient-Specific Factors
1. **Gastric Emptying**: Affects onset of action
2. **GI Motility**: Alters contact time
3. **Food Effects**: Can increase or decrease absorption
4. **Disease States**: Malabsorption syndromes

### Henderson-Hasselbalch Equation

Predicts ionization state of drug:
```
pH = pKa + log([A-]/[HA])

For weak acid: pH = pKa + log([ionized]/[nonionized])
For weak base: pH = pKa + log([nonionized]/[ionized])
```

**Principle**: Nonionized form crosses membranes; ionized form is trapped

**Examples**:
- Aspirin (weak acid, pKa 3.5): Absorbed in stomach (pH 1-2)
- Morphine (weak base, pKa 8): Absorbed in intestine (pH 6-8)

### First-Pass Metabolism

**Definition**: Metabolism occurring before drug reaches systemic circulation

**Sites**:
1. Intestinal wall (CYP3A4, P-glycoprotein)
2. Liver (major site - all portal blood)
3. Lungs (minor for most drugs)

**Clinical Significance**:
- Reduces oral bioavailability
- Higher oral doses needed vs. IV
- Significant for high-extraction drugs

**High First-Pass Drugs** (low oral bioavailability):
- Nitroglycerin (~10%)
- Propranolol (~25%)
- Morphine (~30%)
- Lidocaine (<35%)
- Cyclosporine (~30%)

**Bypassing First-Pass**:
- Sublingual route
- Transdermal route
- Rectal route (partial)
- IV administration

### Bioavailability (F)

**Definition**: Fraction of administered dose reaching systemic circulation unchanged

**Formula**:
```
F = (AUC_oral × Dose_IV) / (AUC_IV × Dose_oral)
```

**Values**:
- IV: F = 1.0 (100%) by definition
- Oral: F = 0 to 1.0 (varies by drug)

**Factors Reducing Bioavailability**:
1. Poor absorption
2. First-pass metabolism
3. Chemical degradation in GI tract
4. P-glycoprotein efflux

**Clinical Applications**:
- Dose adjustment when switching routes
- Bioequivalence testing (generic vs. brand)
- Drug-drug interactions affecting absorption

---

## Distribution

### Definition
Reversible transfer of drug from systemic circulation to tissues.

### Volume of Distribution (Vd)

**Concept**: Theoretical volume into which drug appears to distribute

**Formula**:
```
Vd = Amount of drug in body / Plasma concentration
Vd = Dose / C0 (for IV bolus)
```

**Interpretation**:
- **Vd < 5 L**: Confined to plasma (large/polar molecules)
- **Vd ≈ 15 L**: Extracellular fluid distribution
- **Vd ≈ 42 L**: Total body water distribution
- **Vd > 42 L**: Extensive tissue binding

**Examples**:
- Heparin: Vd = 5 L (stays in blood)
- Gentamicin: Vd = 15 L (extracellular)
- Ethanol: Vd = 40 L (total body water)
- Chloroquine: Vd = 15,000 L (tissue accumulation)
- Digoxin: Vd = 500 L (high tissue binding)

**Clinical Significance**:
- **Loading Dose Calculation**: LD = Vd × Ctarget
- **Dialysis Efficacy**: Low Vd drugs easier to remove
- **Toxicity Management**: High Vd drugs difficult to remove

### Factors Affecting Distribution

#### Drug Properties
1. **Molecular Size**: Large molecules stay in plasma
2. **Lipophilicity**: Lipophilic drugs penetrate tissues
3. **Protein Binding**: Bound drug stays in plasma
4. **Tissue Binding**: Increases Vd

#### Physiological Barriers

**Blood-Brain Barrier (BBB)**
- Tight junctions between endothelial cells
- Lipophilic drugs cross easily
- Hydrophilic drugs require transporters
- P-glycoprotein pumps drugs out

**Penetrate BBB**:
- Lipophilic drugs (anesthetics, sedatives)
- Small molecules
- Nonpolar compounds

**Don't Penetrate BBB**:
- Hydrophilic drugs (aminoglycosides)
- Highly ionized drugs
- Large molecules (heparin)

**Placental Barrier**
- Most drugs cross to some degree
- Lipophilic drugs cross more readily
- Molecular weight <500 Da crosses easily
- Important for fetal drug exposure

### Protein Binding

**Major Binding Proteins**:
1. **Albumin**: Binds acidic drugs (warfarin, phenytoin)
2. **α1-Acid Glycoprotein**: Binds basic drugs (propranolol, lidocaine)
3. **Lipoproteins**: Bind lipophilic drugs

**Principles**:
- Only unbound (free) drug is active
- Only free drug can be metabolized/excreted
- Protein binding is saturable
- Drugs compete for binding sites

**Highly Protein-Bound Drugs** (>90%):
- Warfarin (99%)
- Phenytoin (90%)
- Valproic acid (90%)
- NSAIDs (95-99%)
- Diazepam (99%)

**Clinical Significance**:

**Drug Displacement Interactions**:
- Displacing drug → increased free fraction → increased effect
- Example: Aspirin displaces warfarin → increased bleeding risk
- Most clinically significant for highly bound drugs with narrow therapeutic index

**Hypoalbuminemia**:
- Increased free fraction
- Enhanced drug effect
- Potential toxicity
- Causes: Malnutrition, liver disease, nephrotic syndrome, elderly

### Tissue Binding

**High Tissue Binding** (increases Vd):
- Chloroquine: Accumulates in liver, spleen
- Digoxin: Binds to cardiac muscle
- Tetracyclines: Bind to bone, teeth

**Compartment Models**:

**One-Compartment Model**:
- Instantaneous distribution
- Exponential elimination
- Example: Aminoglycosides

**Two-Compartment Model**:
- Central compartment (plasma, highly perfused organs)
- Peripheral compartment (poorly perfused tissues)
- Biphasic plasma concentration curve
- Example: Most drugs

---

## Metabolism (Biotransformation)

### Definition
Chemical modification of drugs to facilitate elimination.

### Goals of Metabolism
1. Increase polarity/hydrophilicity
2. Enhance renal excretion
3. Decrease pharmacological activity (usually)
4. Occasional activation (prodrugs)

### Sites of Metabolism

**Primary**: Liver (hepatocytes)
**Secondary**:
- Intestinal wall
- Kidneys
- Lungs
- Plasma (esterases)
- Skin

### Phase I Reactions

**Purpose**: Introduce or expose functional groups

**Reactions**:
1. **Oxidation** (most common)
2. **Reduction**
3. **Hydrolysis**

**Cytochrome P450 System**:
- Heme-containing enzymes
- Located in endoplasmic reticulum
- Responsible for ~75% of drug metabolism
- Multiple isoforms: CYP1A2, 2C9, 2C19, 2D6, 2E1, 3A4

**Major CYP Isoforms**:

**CYP3A4** (30% of hepatic P450):
- Substrates: CCBs, statins, macrolides, cyclosporine, midazolam
- Inducers: Rifampin, phenytoin, carbamazepine, St. John's wort
- Inhibitors: Ketoconazole, erythromycin, grapefruit juice, ritonavir

**CYP2D6** (2% but important):
- Substrates: Codeine, β-blockers, TCAs, tramadol
- Inhibitors: Fluoxetine, paroxetine, quinidine, bupropion
- Note: Genetic polymorphisms common

**CYP2C9**:
- Substrates: Warfarin, phenytoin, NSAIDs, losartan
- Inhibitors: Fluconazole, amiodarone, trimethoprim
- Inducers: Rifampin

**CYP2C19**:
- Substrates: Omeprazole, clopidogrel, diazepam
- Inhibitors: Omeprazole, fluoxetine
- Note: Asian populations often poor metabolizers

**CYP1A2**:
- Substrates: Theophylline, caffeine, clozapine
- Inducers: Smoking, charcoal-broiled foods
- Inhibitors: Ciprofloxacin, fluvoxamine

**CYP2E1**:
- Substrates: Ethanol, acetaminophen, anesthetics
- Induced by chronic ethanol

### Phase II Reactions

**Purpose**: Conjugation to increase water solubility

**Reactions**:
1. **Glucuronidation** (most common)
2. **Sulfation**
3. **Acetylation**
4. **Methylation**
5. **Glutathione conjugation**

**Characteristics**:
- Usually produces inactive metabolites
- Highly polar, easily excreted
- Generally not saturable (except at high doses)

**Example - Acetaminophen**:
- Therapeutic doses: Glucuronidation, sulfation
- Toxic doses: CYP2E1 → NAPQI → glutathione depletion → hepatotoxicity

### Enzyme Induction

**Mechanism**: Increased enzyme synthesis over days to weeks

**Effects**:
- Increased metabolism of substrate drugs
- Decreased drug effect/levels
- Requires dose increase
- Self-induction possible (carbamazepine)

**Classic Inducers** (CRAP GPS):
- **C**: Carbamazepine
- **R**: Rifampin (most potent)
- **A**: Alcohol (chronic)
- **P**: Phenytoin, Phenobarbital
- **G**: Griseofulvin
- **P**: St. John's wort (Hypericum Perforatum)
- **S**: Smoking

**Clinical Examples**:
- Rifampin + warfarin → decreased INR → increased dose needed
- Phenytoin + oral contraceptives → decreased effect → pregnancy risk
- Carbamazepine + many drugs → decreased levels

**Time Course**:
- Onset: Days to weeks (enzyme synthesis)
- Offset: Days to weeks after discontinuation

### Enzyme Inhibition

**Mechanism**: Decreased enzyme activity (competitive, noncompetitive, irreversible)

**Effects**:
- Decreased metabolism
- Increased drug levels/effect
- Requires dose reduction
- Risk of toxicity

**Classic Inhibitors**:

**CYP3A4**:
- Azole antifungals (ketoconazole strongest)
- Macrolides (except azithromycin)
- Protease inhibitors (ritonavir)
- Grapefruit juice
- Calcium channel blockers (diltiazem, verapamil)

**CYP2D6**:
- SSRIs (fluoxetine, paroxetine)
- Quinidine
- Bupropion

**Clinical Examples**:
- Ketoconazole + simvastatin → rhabdomyolysis risk
- Fluoxetine + codeine → decreased analgesia (blocks activation)
- Erythromycin + theophylline → theophylline toxicity

**Time Course**:
- Onset: Immediate to hours (enzyme blockade)
- Offset: Depends on inhibitor half-life

### Prodrugs

**Definition**: Inactive drugs requiring metabolism to active form

**Examples**:
- **Codeine** → CYP2D6 → Morphine (analgesia)
- **Clopidogrel** → CYP2C19 → Active metabolite (antiplatelet)
- **Enalapril** → Enalaprilat (ACE inhibition)
- **Levodopa** → Dopamine (Parkinson's)
- **Valacyclovir** → Acyclovir (antiviral)

**Clinical Significance**:
- CYP2D6 poor metabolizers: Codeine ineffective
- CYP2C19 poor metabolizers: Clopidogrel ineffective → higher CV events
- Enzyme inhibitors can prevent activation

### Active Metabolites

**Definition**: Metabolites with pharmacological activity

**Examples**:
- Morphine → Morphine-6-glucuronide (more potent)
- Diazepam → Desmethyldiazepam (long half-life)
- Procainamide → N-acetylprocainamide (NAPA)
- Imipramine → Desipramine
- Primidone → Phenobarbital

**Clinical Significance**:
- Prolonged duration of action
- Accumulation in renal failure
- Toxicity risk

### Factors Affecting Metabolism

**Genetic Polymorphisms**:
- CYP2D6: 7-10% poor metabolizers (Caucasians)
- CYP2C19: 15-20% poor metabolizers (Asians)
- Acetylators: Slow vs. fast (isoniazid, hydralazine)

**Age**:
- Neonates: Immature enzyme systems
- Elderly: Decreased hepatic mass and blood flow

**Disease States**:
- Cirrhosis: Decreased metabolism
- Heart failure: Decreased hepatic blood flow

**Environmental Factors**:
- Diet: Grapefruit juice, cruciferous vegetables
- Smoking: Induces CYP1A2
- Alcohol: Acute inhibition, chronic induction

---

## Excretion

### Definition
Irreversible elimination of drug from body.

### Renal Excretion

**Primary route for most drugs and metabolites**

**Mechanisms**:

1. **Glomerular Filtration**
   - Passive process
   - Filters unbound drug (<20 kDa)
   - GFR ~120 mL/min
   - Protein-bound drugs not filtered

2. **Tubular Secretion**
   - Active transport (proximal tubule)
   - Organic anion transporters (OAT): Acidic drugs
   - Organic cation transporters (OCT): Basic drugs
   - Can secrete protein-bound drug
   - Saturable process

3. **Tubular Reabsorption**
   - Passive diffusion
   - Lipophilic, nonionized drugs reabsorbed
   - Affected by urine pH

**pH Effects on Renal Excretion**:

**Alkalinization** (bicarbonate, acetazolamide):
- Traps weak acids (ionized → can't reabsorb)
- Used for: Aspirin overdose, methotrexate toxicity

**Acidification** (ammonium chloride):
- Traps weak bases
- Less commonly used
- Example: Amphetamine overdose

**Drug Interactions - Tubular Secretion**:
- Probenecid blocks penicillin secretion → increased levels
- NSAIDs + methotrexate → methotrexate toxicity
- Used therapeutically to prolong drug action

### Renal Function Assessment

**Creatinine Clearance (CrCl)**:
```
Cockcroft-Gault Equation:
CrCl (mL/min) = [(140 - age) × weight (kg)] / (72 × SCr)
Multiply by 0.85 for females
```

**eGFR** (MDRD or CKD-EPI):
- More accurate for CKD staging
- Based on SCr, age, sex, race

**Renal Dosing Categories**:
- CrCl >60: Normal dosing
- CrCl 30-60: Moderate reduction
- CrCl 15-30: Significant reduction
- CrCl <15: Marked reduction or avoid
- Dialysis: Special considerations

**Drugs Requiring Dose Adjustment**:
- Aminoglycosides
- Vancomycin
- Digoxin
- Metformin (contraindicated if eGFR <30)
- Gabapentin, pregabalin
- Many antibiotics (β-lactams, fluoroquinolones)
- Enoxaparin
- Methotrexate

### Biliary Excretion

**Mechanism**:
- Active secretion into bile
- Conjugated drugs primarily
- Molecular weight >300 Da

**Enterohepatic Recirculation**:
- Drug excreted in bile → intestine
- Bacterial β-glucuronidase cleaves conjugate
- Reabsorption of parent drug
- Prolongs half-life

**Examples**:
- Estrogens (oral contraceptives)
- Morphine
- Chloramphenicol
- Diazepam

**Clinical Significance**:
- Antibiotics can disrupt (reduced OCP efficacy)
- Cholestyramine binds drugs in gut (digoxin, warfarin)

### Other Routes

**Pulmonary**:
- Volatile anesthetics
- Alcohol (minor route)

**Breast Milk**:
- Lipophilic drugs concentrate
- Weak bases concentrate (milk pH lower)
- Concerns for nursing infants

**Sweat, Saliva**:
- Minor routes
- Can be used for drug testing

---

## Pharmacokinetic Parameters

### Clearance (CL)

**Definition**: Volume of plasma cleared of drug per unit time

**Formula**:
```
CL = Rate of elimination / Plasma concentration
CL = Vd × ke (ke = elimination rate constant)
CL = CLrenal + CLhepatic + CLother
```

**Units**: mL/min or L/hr

**Clinical Significance**:
- Determines **maintenance dose**
- Independent of dose (first-order kinetics)
- Affected by renal/hepatic function

**Maintenance Dose Calculation**:
```
Dosing rate (mg/hr) = CL × Csteady-state
```

**Extraction Ratio**:
```
E = (CLorgan) / (Organ blood flow)
```

- High extraction (E >0.7): Metabolism limited by blood flow
  - Examples: Lidocaine, propranolol, morphine
- Low extraction (E <0.3): Metabolism limited by enzyme capacity
  - Examples: Warfarin, phenytoin, diazepam

### Half-Life (t½)

**Definition**: Time for plasma concentration to decrease by 50%

**Formula**:
```
t½ = 0.693 × Vd / CL
t½ = 0.693 / ke
```

**Clinical Significance**:
- Determines **dosing interval**
- Determines time to steady state (4-5 half-lives)
- Determines washout time

**Multiple Half-Lives**:
- 1 t½: 50% eliminated
- 2 t½: 75% eliminated
- 3 t½: 87.5% eliminated
- 4 t½: 93.75% eliminated
- 5 t½: 96.875% eliminated (~complete)

**Variable Half-Life Examples**:
- Ultrashort: Adenosine (10 sec)
- Short: Insulin (5-10 min)
- Intermediate: Aspirin (4 hr)
- Long: Digoxin (36 hr)
- Very long: Amiodarone (58 days), levothyroxine (7 days)

### Steady State (Css)

**Definition**: Rate of drug input = Rate of drug output

**Time to Reach**:
- 4-5 half-lives (97% of steady state)
- Independent of dose or dosing interval
- Longer half-life → longer time to steady state

**Average Steady State**:
```
Css,avg = (F × Dose) / (CL × τ)
τ = dosing interval
```

**Clinical Implications**:
- Effect not maximal until steady state
- Loading dose can achieve rapid steady state
- Monitoring done at steady state
- Dose changes take 4-5 half-lives to show full effect

### Loading Dose (LD)

**Purpose**: Rapidly achieve therapeutic concentration

**Formula**:
```
LD = Vd × Ctarget / F
```

**When to Use**:
- Drugs with long half-life (digitalis, amiodarone)
- Urgent need for effect
- IV infusions

**Examples**:
- Digoxin: LD 0.75-1.5 mg
- Phenytoin: LD 15-20 mg/kg
- Vancomycin: LD 25-30 mg/kg

### Maintenance Dose (MD)

**Purpose**: Maintain steady-state concentration

**Formula**:
```
MD = (CL × Ctarget × τ) / F
```

**Dosing Strategies**:
1. Continuous infusion: Constant rate
2. Multiple dosing: Fluctuation between peak and trough
3. Extended release: Reduced fluctuation

---

## Drug Kinetics

### Zero-Order Kinetics (Saturation Kinetics)

**Characteristics**:
- Constant amount eliminated per unit time
- Rate independent of concentration
- Saturable metabolism

**Formula**:
```
dC/dt = -k0 (constant rate)
```

**Examples**:
- Ethanol (at typical doses)
- Phenytoin (at therapeutic doses)
- Aspirin (at high doses)

**Clinical Implications**:
- Small dose increase → large concentration increase
- Difficult to predict levels
- Narrow therapeutic index drugs problematic

### First-Order Kinetics (Linear Kinetics)

**Characteristics**:
- Constant fraction eliminated per unit time
- Rate proportional to concentration
- Most drugs at therapeutic doses

**Formula**:
```
dC/dt = -ke × C
C(t) = C0 × e^(-ke×t)
```

**Implications**:
- Predictable dose-concentration relationship
- Half-life constant
- Easier to dose and monitor

---

## Clinical Applications

### Therapeutic Drug Monitoring (TDM)

**Indications**:
1. Narrow therapeutic index
2. Large interpatient variability
3. Relationship between level and effect
4. Availability of assay

**Drugs Commonly Monitored**:
- Aminoglycosides (gentamicin, tobramycin)
- Vancomycin
- Digoxin
- Lithium
- Anticonvulsants (phenytoin, valproic acid, carbamazepine)
- Immunosuppressants (tacrolimus, cyclosporine)
- Theophylline
- Methotrexate

**Timing of Levels**:
- **Trough**: Just before next dose (assesses adequacy)
- **Peak**: 1-2 hr after dose (assesses toxicity)
- **Random**: For drugs with long half-life (digoxin)
- **Steady State**: After 4-5 half-lives

### Special Situations

**Renal Failure**:
- Decreased clearance of renally eliminated drugs
- Accumulation of active metabolites
- Dosing strategies:
  1. Decrease dose, same interval
  2. Same dose, increase interval
  3. Both adjustments

**Hepatic Failure**:
- Decreased metabolism
- Decreased protein synthesis → less binding
- Decreased first-pass effect (increased bioavailability)
- Child-Pugh classification guides dosing

**Obesity**:
- Increased Vd for lipophilic drugs
- May need adjusted body weight:
  - IBW (ideal body weight)
  - ABW (actual body weight)
  - Adjusted BW = IBW + 0.4(ABW - IBW)

**Elderly**:
- Decreased renal function (even if SCr normal)
- Decreased hepatic blood flow
- Altered body composition
- Use Cockcroft-Gault for CrCl estimation

**Pregnancy**:
- Increased Vd (increased blood volume, body water)
- Increased renal clearance (increased GFR)
- May need dose increases

---

## Key Equations Summary

```
Bioavailability: F = AUC_oral/AUC_IV

Volume of Distribution: Vd = Dose/C0

Loading Dose: LD = (Vd × Ctarget)/F

Clearance: CL = Vd × ke

Half-Life: t½ = 0.693 × Vd/CL

Maintenance Dose: MD = (CL × Ctarget × τ)/F

Steady State Time: 4-5 half-lives

First-Order Elimination: C(t) = C0 × e^(-ke×t)
```

---

## Clinical Pearls

1. **Bioavailability**: IV always 100%; oral varies
2. **Vd interpretation**: >42 L means tissue distribution
3. **Loading dose**: Based on Vd; maintenance dose based on CL
4. **Half-life**: Determines dosing interval and time to steady state
5. **CYP450**: 3A4 and 2D6 most clinically important
6. **Inducers**: Take weeks; decrease drug levels (CRAP GPS)
7. **Inhibitors**: Immediate; increase drug levels
8. **Renal dosing**: Must adjust for CrCl <60 for many drugs
9. **Steady state**: Wait 4-5 half-lives before measuring levels
10. **Zero-order**: Phenytoin, ethanol, aspirin (high doses)

---

## Common Exam Questions

1. Calculate loading dose given Vd and target concentration
2. Calculate time to steady state given half-life
3. Predict drug interaction: Inducer/inhibitor + substrate
4. Adjust dose for renal impairment
5. Interpret therapeutic drug levels
6. Determine route bypassing first-pass metabolism
7. Explain why oral dose > IV dose
8. Predict accumulation in renal failure

---

## Key Takeaways

1. **ADME** describes drug movement through the body
2. **Bioavailability** determines how much reaches circulation
3. **Vd** determines loading dose; **CL** determines maintenance dose
4. **Half-life** determines dosing interval and time to steady state
5. **CYP450** system responsible for most drug metabolism
6. **Drug interactions** via enzyme induction/inhibition are clinically significant
7. **Renal function** critical for dosing many drugs
8. **Therapeutic drug monitoring** indicated for narrow therapeutic index drugs
9. **Special populations** require dose adjustments
10. **Understanding PK** enables rational, safe dosing

---

## References

1. Katzung's Basic & Clinical Pharmacology, 15th Edition
2. Goodman & Gilman's Pharmacological Basis of Therapeutics, 14th Edition
3. Applied Biopharmaceutics & Pharmacokinetics, Shargel & Yu
4. Clinical Pharmacokinetics and Pharmacodynamics, Rowland & Tozer
5. Micromedex Drug Information Database
6. FDA Clinical Pharmacology Guidelines
