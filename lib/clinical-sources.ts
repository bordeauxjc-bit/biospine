export type ClinicalSource = {
  name: string;
  publisher: string;
  url: string;
};

const spinalManipulation: ClinicalSource = {
  name: 'Spinal Manipulation: What You Need to Know',
  publisher: 'National Center for Complementary and Integrative Health (NIH)',
  url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
};

const lowBackPain: ClinicalSource = {
  name: 'Low-Back Pain and Complementary Health Approaches',
  publisher: 'National Center for Complementary and Integrative Health (NIH)',
  url: 'https://www.nccih.nih.gov/health/low-back-pain-and-complementary-health-approaches-what-you-need-to-know',
};

const headache: ClinicalSource = {
  name: 'Headache',
  publisher: 'MedlinePlus, U.S. National Library of Medicine',
  url: 'https://medlineplus.gov/headache.html',
};

const neckInjuries: ClinicalSource = {
  name: 'Neck Injuries and Disorders',
  publisher: 'MedlinePlus, U.S. National Library of Medicine',
  url: 'https://medlineplus.gov/neckinjuriesanddisorders.html',
};

const concussion: ClinicalSource = {
  name: 'Responding to a Sports-related Concussion',
  publisher: 'Centers for Disease Control and Prevention',
  url: 'https://www.cdc.gov/heads-up/response/index.html',
};

const osteoarthritis: ClinicalSource = {
  name: 'Osteoarthritis: Diagnosis, Treatment, and Steps to Take',
  publisher: 'National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIH)',
  url: 'https://www.niams.nih.gov/health-topics/osteoarthritis/diagnosis-treatment-and-steps-to-take',
};

const workstation: ClinicalSource = {
  name: 'Computer Workstations: Good Working Positions',
  publisher: 'Occupational Safety and Health Administration',
  url: 'https://www.osha.gov/etools/computer-workstations/positions',
};

export const serviceClinicalSources: Record<string, ClinicalSource[]> = {
  'class-iv-laser-therapy': [
    {
      name: 'Frequently Asked Questions About Lasers: Hazard Classes and Safety',
      publisher: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/radiation-emitting-products/laser-products-and-instruments/frequently-asked-questions-about-lasers',
    },
    {
      name: 'High-Intensity Laser Therapy for Musculoskeletal Disorders: A Systematic Review and Meta-Analysis of Randomized Clinical Trials',
      publisher: 'Journal of Clinical Medicine (2023), indexed in PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36836014/',
    },
  ],
  'chiropractic-adjustments': [spinalManipulation],
  'headache-migraine-care': [headache, spinalManipulation],
  'sports-injury-care': [concussion, spinalManipulation],
  'arthritis-relief': [osteoarthritis, spinalManipulation],
};

export const conditionClinicalSources: Record<string, ClinicalSource[]> = {
  'low-back-pain': [lowBackPain, spinalManipulation],
  'neck-pain': [neckInjuries, spinalManipulation],
  sciatica: [lowBackPain, spinalManipulation],
  'headaches-and-migraines': [headache, spinalManipulation],
  'sports-injuries': [concussion],
  'arthritis-joint-pain': [osteoarthritis],
  whiplash: [neckInjuries],
  'postural-problems': [workstation],
};

export const staticPageClinicalSources = {
  backAndNeck: [lowBackPain, neckInjuries, spinalManipulation],
  autoAccident: [neckInjuries, concussion],
  shockwave: [
    {
      name: 'Extracorporeal Shock Wave Therapy Device for Plantar Fasciitis',
      publisher: 'U.S. Food and Drug Administration',
      url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?ID=P040026',
    },
    {
      name: 'Extracorporeal Shock Wave Therapy for Lower-Limb Tendinopathy',
      publisher: 'PubMed, U.S. National Library of Medicine',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29557811/',
    },
  ],
} satisfies Record<string, ClinicalSource[]>;
