---
title: Metadata and Clinical Information
redirect_from:
  - /docs/guides/data/metadata/
---


## Metadata

Each data request includes a text file called `SAMPLE_INFO.txt` that provides a number of file level properties (sample identifiers, clinical attributes, etc).

### Standard Metadata

 Below are the set of tags which *may* exist for any given file in St. Jude Cloud. All optional metadata will have `sj_` prepended to their tag name.

| Property             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| file_path            | The path to the file in your St. Jude Cloud project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| subject_name         | A unique subject identifier assigned internally at St. Jude.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sample_name          | A unique sample identifier assigned internally at St. Jude.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sample_type          | One of Autopsy, Cell line, Diagnosis, Germline, Metastasis, Relapse, or Xenograft.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| sequencing_type      | Whether the file was generated from Whole Genome (WGS), Whole Exome (WES), or RNA-Seq.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| file_type            | File type to be rendered in the St. Jude Cloud Genomics Platform data browser. Note that indices will be marked as the file type they accompany, and this is because these files will be vended together in our data browser. If you wish to be able to distinguish these file types, please parse the `file_path`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| description          | Optional field that may contain additional file information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sj_diseases          | If your data request was process after August 18, 2020, the field should be interpreted as the harmonized St. Jude Cloud diagnosis based on the best available information (data provided by the lab or PI and followup by scientists on the St. Jude Cloud team). If your data request was processed before August 18, 2020, this field should be interpreted as the disease identifier assigned at the time of genomic sequencing (keyly, the diagnosis known at the time of genomic testing may not be the best available information). **If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` when including diagnosis in your analysis. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the lab-provided value in `attr_diagnosis`. |
| sj_datasets          | If present, the datasets in the data browser which this file is associated with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sj_pmid_accessions   | If the file was associated with a paper, the related [Pubmed][pubmed] accession number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| sj_ega_accessions    | If the file was associated with a paper, the related [EGA][ega] accession number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| sj_dataset_accession | If present, the permanent accession number assigned in St. Jude Cloud.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sj_embargo_date      | The [embargo date](../../requesting-data/glossary/#embargo-date), which specifies the first date which the files can be used in a publication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Clinical and Phenotypic Information

Also included is a set of phenotypic information queried from the physician or research team's records at the time of sample submission to St. Jude Cloud. These are all considered to be *optional*, as the level of information gathered for each sample varies. If empty, the physician or research team did not indicate a value for the field. All basic clinical or phenotypic information will have `attr_` prepended to their tag name.

| Property                   | Description                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| attr_age_at_diagnosis      | Age at first diagnosis. This field is normalized as a decimal value. If empty, the physician or research team did not indicate a value for this field. |
| attr_diagnosis             | Unharmonized primary diagnosis as reported by the lab or PI upon submission of data to St. Jude Cloud.                                                 |
| attr_ethnicity             | Self-reported ethnicity. Values are normalized according to the [US Census Bureau classifications][censusburea].                                       |
| attr_race                  | Self-reported race. Values are normalized according to the [US Census Bureau classifications][censusburea].                                            |
| attr_sex                   | Self-reported sex.                                                                                                                                     |
| attr_oncotree_disease_code | The disease code (assigned at the time of genomic sequencing) as specified by [Oncotree Version 2019-03-01][oncotree_2019_03_01].                      |

### Diagnosis Codes

!!!note
During the release of the St. Jude Cloud paper, we undertook a massive effort to curate and harmonize diagnosis values within St. Jude Cloud. We provide two values for diagnosis, and you should select carefully which value you use based on your use case:

1. `sj_diseases`, which, since August 18, 2020, represents the harmonized diagnosis value curated by scientists on the St. Jude Cloud team (before that time it represented the diagnosis known at time of sequencing).
2. `attr_diagnosis`, which contains the unharmonized diagnosis value directly as it was submitted to us from the lab or PI.

**If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` field. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the value in `attr_diagnosis`.
!!!

The `SAMPLE_INFO.txt` file that comes with your data request will contain the list of associated harmonized diagnosis codes (`sj_diseases`) for each sample. These codes represent the harmonized diagnosis values curated by the St. Jude Cloud team and reflect the most up to date information about the sample. Below, we include the full set of diagnosis values in St. Jude Cloud Genomics Platform, the category of the tumor, and the closest available OncoTree term. We regularly work with the OncoTree committee to update new subtypes, so any discrepancies between our diagnosis code and the OncoTree term can be interpreted as more granular classifications that OncoTree does not yet account for.

|    Tumor Category      |                                  Diagnosis                                   | Diagnosis Code | Corresponding Oncotree Code |
|------------------------|------------------------------------------------------------------------------|----------------|-----------------------------|
| Brain Tumor            | Acoustic Neuroma                                                             | ANM            |                             |
| Brain Tumor            | Anaplastic Ganglioglioma                                                     | AGNG           | AGNG                        |
| Brain Tumor            | Astrocytoma, NOS                                                             | ASTR           | ASTR                        |
| Brain Tumor            | Atypical Meningioma                                                          | ATM            | ATM                         |
| Brain Tumor            | Atypical Teratoid/Rhabdoid Tumor                                             | ATRT           | ATRT                        |
| Brain Tumor            | Brain Tumor                                                                  | BT             |                             |
| Brain Tumor            | Central Nervous System                                                       | CNS            |                             |
| Brain Tumor            | Central Neurocytoma                                                          | CNC            | CNC                         |
| Brain Tumor            | Choroid Plexus Carcinoma                                                     | CPC            | CPC                         |
| Brain Tumor            | Choroid Plexus Papilloma                                                     | CPP            | CPP                         |
| Brain Tumor            | Colloid Cyst                                                                 | CCY            | MBT                         |
| Brain Tumor            | Craniopharyngioma, Adamantinomatous Type                                     | ACPG           | ACPG                        |
| Brain Tumor            | Craniopharyngioma, NOS                                                       | CPG            | SELT                        |
| Brain Tumor            | Desmoplastic Infantile Astrocytoma                                           | DIA            | DIA                         |
| Brain Tumor            | Desmoplastic/Nodular Medulloblastoma                                         | DMBL           | DMBL                        |
| Brain Tumor            | Desmoplastic/Nodular Medulloblastoma, SHH subtype                            | DMBLSHH        | DMBL                        |
| Brain Tumor            | Dysembryoplastic Neuroepithelial Tumor                                       | DNT            | DNT                         |
| Brain Tumor            | Embryonal Tumor, Brain                                                       | EMBT           | EMBT                        |
| Brain Tumor            | Embryonal Tumor with Multilayered Rosettes, Brain                            | ETMR           | EMBT                        |
| Brain Tumor            | Ependymomal Tumor                                                            | EPMT           | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Anaplastic                                                | APE            | APE                         |
| Brain Tumor            | Ependymomal Tumor, Posterior Fossa                                           | EPMTPF         | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Spinal Tumor                                              | EPMTST         | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Supratentorial                                            | EPMTSU         | EPMT                        |
| Brain Tumor            | Fibrillary Astrocytoma                                                       | FASTR          | DASTR                       |
| Brain Tumor            | Gangliocytoma                                                                | GNC            | GNC                         |
| Brain Tumor            | Ganglioglioma                                                                | GNG            | GNG                         |
| Brain Tumor            | Glioblastoma                                                                 | GB             | GB                          |
| Brain Tumor            | Glioma, NOS                                                                  | GNOS           | GNOS                        |
| Brain Tumor            | High-Grade Calvarium Sarcoma                                                 | HGCS           |                             |
| Brain Tumor            | High-Grade Glioma, NOS                                                       | HGGNOS         | HGGNOS                      |
| Brain Tumor            | High-Grade Neuroepithelial Tumor                                             | HGNET          | HGNET                       |
| Brain Tumor            | Large Cell/Anaplastic Medulloblastoma                                        | AMBL           | AMBL                        |
| Brain Tumor            | Large Cell/Anaplastic Medulloblastoma, SHH subtype                           | AMBLSHH        | AMBL                        |
| Brain Tumor            | Low-Grade Glioma, NOS                                                        | LGGNOS         | LGGNOS                      |
| Brain Tumor            | Low-Grade Glioneuronal Tumor                                                 | LGGNT          | MBT                         |
| Brain Tumor            | Low-Grade Neuroepithelial Tumor                                              | LGNET          | LGNET                       |
| Brain Tumor            | Medulloblastoma                                                              | MBL            | MBL                         |
| Brain Tumor            | Medulloblastoma, Group 3                                                     | MBLG3          | MBL                         |
| Brain Tumor            | Medulloblastoma, Group 4                                                     | MBLG4          | MBL                         |
| Brain Tumor            | Medulloblastoma, SHH subtype                                                 | MBLSHH         | MBL                         |
| Brain Tumor            | Medulloblastoma with Extensive Nodularity, SHH subtype                       | MBENSHH        | MBEN                        |
| Brain Tumor            | Medulloblastoma, WNT subtype                                                 | MBLWNT         | MBL                         |
| Brain Tumor            | Medulloepithelioma                                                           | MDEP           | MDEP                        |
| Brain Tumor            | Meningioma                                                                   | MNG            | MNG                         |
| Brain Tumor            | Miscellaneous Brain Tumor                                                    | MBT            | MBT                         |
| Brain Tumor            | Mixed Myxopapillary Anaplastic Ependymoma, Spinal Tumor                      | MEPMST         | EPMT                        |
| Brain Tumor            | Myxopapillary Ependymoma                                                     | MPE            | MPE                         |
| Brain Tumor            | Myxopapillary Ependymoma, Fourth Ventricle                                   | MPEFV          | MPE                         |
| Brain Tumor            | Myxopapillary Ependymoma, Posterior Fossa                                    | MPEPF          | MPE                         |
| Brain Tumor            | Neuroepithelioma                                                             | NEP            |                             |
| Brain Tumor            | Oligodendroglioma                                                            | ODG            | ODG                         |
| Brain Tumor            | Papillary Ependymoma, NOS                                                    | PEPNOS         | EPMT                        |
| Brain Tumor            | Pilocytic Astrocytoma                                                        | PAST           | PAST                        |
| Brain Tumor            | Pilomyxoid Astrocytoma                                                       | PMA            | PMA                         |
| Brain Tumor            | Pineal Anlage Tumor                                                          | PAT            | PINT                        |
| Brain Tumor            | Pineal Parenchymal Tumor of Intermediate Differentiation                     | PPTID          | PPTID                       |
| Brain Tumor            | Pineoblastoma                                                                | PBL            | PBL                         |
| Brain Tumor            | Pineocytoma                                                                  | PINC           | PINC                        |
| Brain Tumor            | Pleomorphic Xanthoastrocytoma                                                | PXA            | PXA                         |
| Brain Tumor            | Primitive Neuroectodermal Tumor                                              | PNET           | PNET                        |
| Brain Tumor            | Subependymal Giant Cell Astrocytoma                                          | SEGA           |                             |
| Germ Cell Tumor        | Choriocarcinoma                                                              | CCA            |                             |
| Germ Cell Tumor        | Dysgerminoma                                                                 | DYS            |                             |
| Germ Cell Tumor        | Dysgerminoma, Ovarian                                                        | ODYS           | ODYS                        |
| Germ Cell Tumor        | Dysgerminoma, Pelvis                                                         | PDYS           |                             |
| Germ Cell Tumor        | Embryonal Carcinoma, NOS                                                     | ECNOS          |                             |
| Germ Cell Tumor        | Germ Cell Tumor, Brain                                                       | BGCT           | BGCT                        |
| Germ Cell Tumor        | Germ Cell Tumor, NOS                                                         | GCT            |                             |
| Germ Cell Tumor        | Germinoma                                                                    | GMN            | GMN                         |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Brain                                                 | BMGCT          | BMGCT                       |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, NOS                                                   | MGCTNOS        |                             |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Ovary                                                 | OMGCT          | OMGCT                       |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Testis                                                | MGCT           | MGCT                        |
| Germ Cell Tumor        | Teratocarcinoma                                                              | TTC            |                             |
| Germ Cell Tumor        | Teratoma, NOS                                                                | TTNOS          |                             |
| Germ Cell Tumor        | Yolk Sac Tumor, Brain                                                        | BYST           | BYST                        |
| Germ Cell Tumor        | Yolk Sac Tumor, NOS                                                          | YSTNOS         |                             |
| Germ Cell Tumor        | Yolk Sac Tumor, Ovary                                                        | OYST           | OYST                        |
| Germ Cell Tumor        | Yolk Sac Tumor, Sacrococcygeal or Presacral                                  | SPYST          |                             |
| Hematologic Malignancy | Acute Leukemias of Ambiguous Lineage                                         | ALAL           | ALAL                        |
| Hematologic Malignancy | Acute Lymphoblastic Leukemia, NOS                                            | ALLNOS         | LNM                         |
| Hematologic Malignancy | Acute Megakaryoblastic Leukemia                                              | AMKL           | AMKL                        |
| Hematologic Malignancy | Acute Megakaryoblastic Leukemia, KMT2A rearrangement                         | AMKLKMT2A      | AMKL                        |
| Hematologic Malignancy | Acute Monoblastic Leukemia                                                   | AMOL           | AMOL                        |
| Hematologic Malignancy | Acute Myeloid Leukemia                                                       | AML            | AML                         |
| Hematologic Malignancy | Acute Myeloid Leukemia, Core Binding Factor                                  | CBF            | AMLRGA                      |
| Hematologic Malignancy | Acute Myeloid Leukemia, KMT2A rearrangement                                  | AMLKMT2A       | AMLRGA                      |
| Hematologic Malignancy | Acute Myelomonocytic Leukemia                                                | AMML           | AMML                        |
| Hematologic Malignancy | Acute Myelomonocytic Leukemia, KMT2A rearrangement                           | AMMLKMT2A      | AMML                        |
| Hematologic Malignancy | Acute Promyelocytic Leukemia                                                 | APML           | AML                         |
| Hematologic Malignancy | Acute Promyelocytic Leukemia, PML-RARA                                       | APLPMLRARA     | APLPMLRARA                  |
| Hematologic Malignancy | Acute Undifferentiated Leukemia                                              | AUL            | AUL                         |
| Hematologic Malignancy | Acute Undifferentiated Leukemia, KMT2A rearrangement                         | AULKMT2A       | AUL                         |
| Hematologic Malignancy | Anaplastic Large Cell Lymphoma                                               | ALCL           | ALCL                        |
| Hematologic Malignancy | Atypical Dendritic Cell Tumor                                                | ADCT           |                             |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, BCR-ABL1                                | BALLBCRABL1    | BLLBCRABL1                  |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, BCR-ABL1 like                           | BALLBCRABL1L   | BLLBCRABL1L                 |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, CRLF2 rearrangement                     | BALLCRLF2      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Dicentric                               | BALLDICENTRIC  | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Down Syndrome                           | BALLDOWN       | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, DUX4-IGH                                | BALLDUX4IGH    | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, DUX4-IGH like                           | BALLDUX4IGHL   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ETV6-RUNX1                              | BALLETV6RUNX1  | BLLETV6RUNX1                |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ETV6-RUNX1 like                         | BALLETV6RUNX1L | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, HLF rearrangement                       | BALLHLF        | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Hyperdiploidy                           | BALLHYPER      | BLLHYPER                    |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Hypodiploidy                            | BALLHYPO       | BLLHYPO                     |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, iAMP21                                  | BALLIAMP21     | BLLIAMP21                   |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, IGH-CEBPD                               | BALLIGHCEBPD   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, IKZF1 N159Y                             | BALLIKZF1      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, KMT2A rearrangement                     | BALLKMT2A      | BLLKMT2A                    |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, KMT2A rearrangement like                | BALLKMT2AL     | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, MEF2D rearrangement                     | BALLMEF2D      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, MYC rearrangement                       | BALLMYC        | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, NOS                                     | BALLNOS        | BLLNOS                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, NUTM1 rearrangement                     | BALLNUTM1      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, PAX5 alteration                         | BALLPAX5       | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, PAX5 P80R                               | BALLPAX5P80R   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, TCF3-PBX1                               | BALLTCF3PBX1   | BLLTCF3PBX1                 |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ZEB2 alteration and CEBPE rearrangement | BALLZEB2CEBPE  | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ZNF384 rearrangement                    | BALLZNF384     | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ZNF384 rearrangement like               | BALLZNF384L    | BLLRGA                      |
| Hematologic Malignancy | B-cell Lymphoblastic Lymphoma, BCR-ABL1 like                                 | BLLBCRABL1L    | BLLBCRABL1L                 |
| Hematologic Malignancy | B-cell Lymphoblastic Lymphoma, TCF3-PBX1                                     | BLLTCF3PBX1    | BLLTCF3PBX1                 |
| Hematologic Malignancy | Blood Cancer of Unknown Primary                                              | BCUP           | CUP                         |
| Hematologic Malignancy | Burkitt Lymphoma                                                             | BL             | BL                          |
| Hematologic Malignancy | Chronic Myeloid Leukemia                                                     | CML            | CML                         |
| Hematologic Malignancy | Diffuse Large B-cell Lymphoma, NOS                                           | DLBCLNOS       | DLBCLNOS                    |
| Hematologic Malignancy | Extranodal Marginal Zone Lymphoma                                            | EMZL           | MZL                         |
| Hematologic Malignancy | Follicular Lymphoma                                                          | FL             | FL                          |
| Hematologic Malignancy | General Leukemia                                                             | GENLK          |                             |
| Hematologic Malignancy | Hematopoietic Malignancies                                                   | HM             | CUP                         |
| Hematologic Malignancy | Hodgkin Lymphoma                                                             | HL             | HL                          |
| Hematologic Malignancy | Langerhans Cell Histiocytosis                                                | LCH            | LCH                         |
| Hematologic Malignancy | Lymphocyte-Depleted Classical Hodgkin Lymphoma                               | LDCHL          | LDCHL                       |
| Hematologic Malignancy | Lymphocyte-Rich Classical Hodgkin Lymphoma                                   | LRCHL          | LRCHL                       |
| Hematologic Malignancy | Mixed Cellularity Classical Hodgkin Lymphoma                                 | MCCHL          | MCCHL                       |
| Hematologic Malignancy | Mycosis Fungoides                                                            | MYCF           | MYCF                        |
| Hematologic Malignancy | Myelodysplastic Syndromes                                                    | MDS            | MDS                         |
| Hematologic Malignancy | Myeloid Sarcoma                                                              | MS             | MS                          |
| Hematologic Malignancy | Nodular Lymphocyte-Predominant Hodgkin Lymphoma                              | NLPHL          | NLPHL                       |
| Hematologic Malignancy | Nodular Sclerosis Classical Hodgkin Lymphoma                                 | NSCHL          | NSCHL                       |
| Hematologic Malignancy | Non-Hodgkin Lymphoma                                                         | NHL            | NHL                         |
| Hematologic Malignancy | Rosai-Dorfman Disease                                                        | RDD            | RDD                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, BCL11B rearrangement                    | TALLBCL11B     | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, HOXA rearrangement                      | TALLHOXA       | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, KMT2A rearrangement                     | TALLKMT2A      | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, LMO2 rearrangement                      | TALLLMO2       | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, NKX2 rearrangement                      | TALLNKX2       | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, NOS                                     | TALLNOS        | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, SET-NUP214                              | TALLSETNUP214  | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, TAL1 rearrangement                      | TALLTAL1       | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, TLX1 rearrangement                      | TALLTLX1       | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, TLX3 rearrangement                      | TALLTLX3       | TLL                         |
| Hematologic Malignancy | T-cell Lymphoblastic Lymphoma, LMO1 rearrangement                            | TLLLMO1        | TLL                         |
| Hematologic Malignancy | T-cell Lymphoblastic Lymphoma, NKX2 rearrangement                            | TLLNKX2        | TLL                         |
| Hematologic Malignancy | T-cell Lymphoblastic Lymphoma, NOS                                           | TLLNOS         | TLL                         |
| Hematologic Malignancy | T-cell Lymphoblastic Lymphoma, TAL1 rearrangement                            | TLLTAL1        | TLL                         |
| Hematologic Malignancy | Therapy-Related Acute Myeloid Leukemia                                       | TAML           | TAML                        |
| Hematologic Malignancy | Therapy-Related Myelodysplastic Syndrome                                     | TMDS           | TMDS                        |
| Hematologic Malignancy | Therapy-Related Myeloid Sarcoma                                              | TMS            | TMN                         |
| Non-Malignancy         | Non-Malignancy                                                               | NM             |                             |
| Normal                 | Control Sample                                                               | NORM           |                             |
| Sickle Cell Disease    | Sickle Cell Disease                                                          | SCD            |                             |
| Solid Tumor            | Acinar Cell Carcinoma                                                        | ACN            | ACN                         |
| Solid Tumor            | Adenocarcinoma, NOS                                                          | ADNOS          | ADNOS                       |
| Solid Tumor            | Adenoid Cystic Carcinoma of the Lacrimal Gland                               | ACLG           | ACLG                        |
| Solid Tumor            | Adenoid Cystic Carcinoma of the Salivary Gland                               | ACYC           | ACYC                        |
| Solid Tumor            | Adrenocortical Carcinoma                                                     | ACC            | ACC                         |
| Solid Tumor            | Alveolar Rhabdomyosarcoma                                                    | ARMS           | ARMS                        |
| Solid Tumor            | Alveolar Soft Part Sarcoma                                                   | ASPS           | ASPS                        |
| Solid Tumor            | Aneurysmal Bone Cyst                                                         | ABC            | ABC                         |
| Solid Tumor            | Angiomatoid Fibrous Histiocytoma                                             | AFH            | AFH                         |
| Solid Tumor            | Basal Cell Carcinoma                                                         | BCC            | BCC                         |
| Solid Tumor            | Botryoid Type Embryonal Rhabdomyosarcoma                                     | BERMS          | ERMS                        |
| Solid Tumor            | Carcinoma, NOS                                                               | CNOS           | CUP                         |
| Solid Tumor            | Chondroblastic Osteosarcoma                                                  | CHOS           | CHOS                        |
| Solid Tumor            | Chondroblastoma                                                              | CHBL           | CHBL                        |
| Solid Tumor            | Chondrosarcoma                                                               | CHS            | CHS                         |
| Solid Tumor            | Chordoma                                                                     | CHDM           | CHDM                        |
| Solid Tumor            | Clear Cell Sarcoma                                                           | CCS            | CCS                         |
| Solid Tumor            | Clear Cell Sarcoma of Kidney                                                 | CCSK           | CCSK                        |
| Solid Tumor            | Congenital Melanocytic Nevus                                                 | CMLN           | SKCN                        |
| Solid Tumor            | Congenital Mesoblastic Nephroma                                              | CMN            | RCC                         |
| Solid Tumor            | Dermatofibrosarcoma Protuberans                                              | DFSP           | DFSP                        |
| Solid Tumor            | Desmoid/Aggressive Fibromatosis                                              | DES            | DES                         |
| Solid Tumor            | Desmoplastic Small Round Cell Tumor                                          | DSRCT          | DSRCT                       |
| Solid Tumor            | Embryonal Rhabdomyosarcoma                                                   | ERMS           | ERMS                        |
| Solid Tumor            | Endometrioid Adenocarcinoma, NOS                                             | EACNOS         | ADNOS                       |
| Solid Tumor            | Epithelioid Hemangioendothelioma                                             | EHAE           | EHAE                        |
| Solid Tumor            | Epithelioid Sarcoma                                                          | EPIS           | EPIS                        |
| Solid Tumor            | Ewing Sarcoma                                                                | EWS            | ES                          |
| Solid Tumor            | Fibroblastic Osteosarcoma                                                    | FIOS           | FIOS                        |
| Solid Tumor            | Fibromyxoid Sarcoma                                                          | FMS            |                             |
| Solid Tumor            | Fibrosarcoma, Abdominal                                                      | AFIBS          | FIBS                        |
| Solid Tumor            | Fibrosarcoma, NOS                                                            | FIBS           | FIBS                        |
| Solid Tumor            | Follicular Thyroid Cancer                                                    | THFO           | THFO                        |
| Solid Tumor            | Ganglioneuroblastoma                                                         | GNBL           | GNBL                        |
| Solid Tumor            | Ganglioneuroma                                                               | GN             | GN                          |
| Solid Tumor            | Gastrointestinal Neuroendocrine Tumor                                        | GINET          | GINET                       |
| Solid Tumor            | Gastrointestinal Stromal Tumor                                               | GIST           | GIST                        |
| Solid Tumor            | General Bone Tumor                                                           | GENBN          |                             |
| Solid Tumor            | General Kidney                                                               | GENKY          |                             |
| Solid Tumor            | Giant Cell Tumor, NOS                                                        | GICT           | GCTB                        |
| Solid Tumor            | Granulosa Cell Tumor                                                         | GRCT           | GRCT                        |
| Solid Tumor            | Hepatoblastoma                                                               | HB             | LIHB                        |
| Solid Tumor            | Hepatocellular Carcinoma                                                     | HCC            | HCC                         |
| Solid Tumor            | High Grade Sarcoma                                                           | HGS            |                             |
| Solid Tumor            | Hurthle Cell Thyroid Cancer                                                  | THHC           | THHC                        |
| Solid Tumor            | Infantile Fibrosarcoma                                                       | IFS            | IFS                         |
| Solid Tumor            | Inflammatory Myofibroblastic Lung Tumor                                      | IMTL           | IMTL                        |
| Solid Tumor            | Inflammatory Myofibroblastic Stomach Tumor                                   | IMTS           | IMT                         |
| Solid Tumor            | Juvenile Xanthogranuloma                                                     | JXG            | JXG                         |
| Solid Tumor            | Leiomyosarcoma, NOS                                                          | LMS            | LMS                         |
| Solid Tumor            | Lipoblastoma                                                                 | LBL            |                             |
| Solid Tumor            | Lipofibromatosis                                                             | LFBR           |                             |
| Solid Tumor            | Liposarcoma                                                                  | LIPO           | LIPO                        |
| Solid Tumor            | Liver Malignancy, NOS                                                        | LMNOS          |                             |
| Solid Tumor            | Malignant Fibrous Histiocytoma                                               | MFH            | MFH                         |
| Solid Tumor            | Malignant Mesenchymoma                                                       | MME            |                             |
| Solid Tumor            | Malignant Mesenchymoma of the Liver                                          | MMEL           |                             |
| Solid Tumor            | Malignant Peripheral Nerve Sheath Tumor                                      | MPNST          | MPNST                       |
| Solid Tumor            | Malignant Rhabdoid Tumor of the Bladder                                      | MRTB           |                             |
| Solid Tumor            | Malignant Rhabdoid Tumor of the Liver                                        | MRTL           | MRTL                        |
| Solid Tumor            | Malignant Thymoma                                                            | MTHYM          | THYM                        |
| Solid Tumor            | Melanocytic Nevus                                                            | MLN            | MEL                         |
| Solid Tumor            | Melanoma                                                                     | MEL            | MEL                         |
| Solid Tumor            | Mesenchymal Chondrosarcoma                                                   | MCHS           | MCHS                        |
| Solid Tumor            | Mixed Spindle Cell and Embryonal Rhabdomyosarcoma                            | MSCERMS        | RMS                         |
| Solid Tumor            | Mucinous Adenocarcinoma, NOS                                                 | MACNOS         |                             |
| Solid Tumor            | Mucinous Adenocarcinoma of the Colon and Rectum                              | MACR           | MACR                        |
| Solid Tumor            | Mucoepidermoid Carcinoma                                                     | MUCC           | MUCC                        |
| Solid Tumor            | Myeloproliferative Neoplasms                                                 | MPN            | MPN                         |
| Solid Tumor            | Myopericytoma                                                                | MPC            | MPC                         |
| Solid Tumor            | Myositis Ossificans                                                          | MO             |                             |
| Solid Tumor            | Nasopharyngeal Carcinoma                                                     | NPC            | NPC                         |
| Solid Tumor            | Neuroblastoma                                                                | NBL            | NBL                         |
| Solid Tumor            | Neurofibroma                                                                 | NFIB           | NFIB                        |
| Solid Tumor            | Neurothekeoma                                                                | NTK            |                             |
| Solid Tumor            | Osteoblastoma                                                                | OB             |                             |
| Solid Tumor            | Osteoid Osteoma                                                              | OO             |                             |
| Solid Tumor            | Osteosarcoma                                                                 | OS             | OS                          |
| Solid Tumor            | Pancreatic Neuroendocrine Tumor                                              | PANET          | PANET                       |
| Solid Tumor            | Papillary Renal Cell Carcinoma                                               | PRCC           | PRCC                        |
| Solid Tumor            | Papillary Thyroid Cancer                                                     | THPA           | THPA                        |
| Solid Tumor            | Papillary Tumor of the Pineal Region                                         | PTPR           | PTPR                        |
| Solid Tumor            | Paraganglioma                                                                | PGNG           | PGNG                        |
| Solid Tumor            | Parosteal Osteosarcoma                                                       | PAOS           | PAOS                        |
| Solid Tumor            | Periosteal Osteosarcoma                                                      | PEOS           | PEOS                        |
| Solid Tumor            | Peripheral Primitive Neuroectodermal Tumor                                   | PPNET          | PNET                        |
| Solid Tumor            | Pheochromocytoma                                                             | PHC            | PHC                         |
| Solid Tumor            | Pineal Tumor                                                                 | PINT           | PINT                        |
| Solid Tumor            | Pleuropulmonary Blastoma                                                     | PPB            | PPB                         |
| Solid Tumor            | Renal Cell Carcinoma                                                         | RCC            | RCC                         |
| Solid Tumor            | Renal Epitheloid Angiomyolipoma                                              | EAML           | RAML                        |
| Solid Tumor            | Retinoblastoma                                                               | RBL            | RBL                         |
| Solid Tumor            | Rhabdoid Cancer, Kidney                                                      | MRT            | MRT                         |
| Solid Tumor            | Rhabdomyosarcoma                                                             | RMS            | RMS                         |
| Solid Tumor            | Round Cell Sarcoma, NOS                                                      | RCSNOS         | RCSNOS                      |
| Solid Tumor            | Serous Surface Papillary Carcinoma                                           | SSPC           |                             |
| Solid Tumor            | Signet Ring Cell Carcinoma of the Stomach                                    | SSRCC          | SSRCC                       |
| Solid Tumor            | Small Cell Osteosarcoma                                                      | SCOS           | SCOS                        |
| Solid Tumor            | Soft Tissue Perineuroma                                                      | STP            |                             |
| Solid Tumor            | Soft Tissue Sarcoma, NOS                                                     | STSNOS         | SARCNOS                     |
| Solid Tumor            | Solid Cancer of Unknown Primary                                              | SCUP           | CUP                         |
| Solid Tumor            | Solid Tumor                                                                  | ST             |                             |
| Solid Tumor            | Solitary Fibrous Tumor/Hemangiopericytoma                                    | SFT            | SFT                         |
| Solid Tumor            | Spindle Cell Rhabdomyosarcoma                                                | SCRMS          | SCRMS                       |
| Solid Tumor            | Spindle Cell Sarcoma, NOS                                                    | SCSNOS         |                             |
| Solid Tumor            | Spindle Cell/Sclerosing Rhabdomyosarcoma                                     | SCSRMS         | SCSRMS                      |
| Solid Tumor            | Spindle Epithelial Tumor with Thymus-Like Differentiation                    | SETTLE         |                             |
| Solid Tumor            | Spitzoid Melanoma                                                            | SPZM           | SPZM                        |
| Solid Tumor            | Squamous Cell Carcinoma, NOS                                                 | SCCNOS         | SCCNOS                      |
| Solid Tumor            | Superior Pubic Ramus Sarcoma                                                 | SPRS           | SARCNOS                     |
| Solid Tumor            | Synovial Sarcoma                                                             | SYNS           | SYNS                        |
| Solid Tumor            | Telangiectatic Osteosarcoma                                                  | TEOS           | TEOS                        |
| Solid Tumor            | Undifferentiated Embryonal Sarcoma of the Liver                              | UESL           | UESL                        |
| Solid Tumor            | Wilms                                                                        | WT             | WT                          |
| Solid Tumor            | Wilms, Bilateral                                                             | WTB            | WT                          |



[pubmed]: https://www.ncbi.nlm.nih.gov/pubmed/
[ega]: https://www.ebi.ac.uk/ega/home
[censusburea]: https://www.census.gov/mso/www/training/pdf/race-ethnicity-onepager.pdf
[oncotree_2019_03_01]: http://oncotree.mskcc.org/#/home?version=oncotree_2019_03_01


## Similar Topics

[About our Decision Process & Terminology](../../requesting-data/glossary)
[Making a Data Request](../../requesting-data/making-a-data-request)
[Managing Data Overview](../../managing-data/working-with-our-data)
