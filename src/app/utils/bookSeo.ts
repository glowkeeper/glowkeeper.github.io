import type { BookEntry, BookManifest } from '@/app/utils/bookRegistry'

export const onSlenderStringsDescription = 'The true story of a father whose daughter had a childhood pilocytic astrocytoma—brain surgery, chemotherapy, survival, family separation and life in 2026.'

const topicDescriptions: Record<string, string> = {
  pilocytic_astrocytoma: 'A father learns that his young daughter has a pilocytic astrocytoma after emergency brain surgery.',
  symptoms: 'The early symptoms of a childhood brain tumour, recalled by a father whose daughter was later diagnosed with a pilocytic astrocytoma.',
  missed_opportunities: 'A personal account of missed opportunities to recognise the symptoms of a childhood brain tumour.',
  the_scan: 'A family waits for the MRI scan that reveals their two-year-old daughter’s brain tumour.',
  surgery: 'A father recounts his young daughter’s emergency brain surgery and the long night spent waiting for news.',
  second_opinions: 'Seeking second opinions while facing difficult treatment decisions for a child with a low-grade brain tumour.',
  scanxiety: 'A parent’s experience of scanxiety: the fear and uncertainty surrounding a child’s follow-up MRI scans.',
  chemotherapy: 'A family considers chemotherapy for a child with recurrent, disseminated pilocytic astrocytoma.',
  chemotherapy_begins: 'A father describes the beginning of his daughter’s vinblastine chemotherapy treatment.',
  im_scared: 'A deeply personal account of comforting a frightened child during cancer treatment.',
  the_effect_on_abis_sister: 'How a child’s brain tumour diagnosis affects her sister and the wider family.',
  the_effect_on_me: 'A father reflects on the emotional effects of his daughter’s brain tumour diagnosis and treatment.',
  peer_support: 'The value of peer support for parents of children living with low-grade glioma.',
  no_conclusion: 'A father reflects on uncertainty, fear and gratitude after his daughter’s brain tumour treatment.',
  addendum: 'Five years after chemotherapy, Abi is healthy, her tumour is stable and her oncologist discharges her from regular follow-up.',
  afterword: 'A father reflects on losing contact with his daughter after surviving years of childhood cancer, while continuing to love and hope for her.',
  timeline: 'A chronology of Abi’s childhood brain tumour diagnosis, surgery, recurrence, chemotherapy, discharge and family life from 2009 to 2026.',
  appendix: 'The 2026 appendix to On Slender Strings, separating the book’s historical record from current medical evidence and corrected information.',
  glossary: 'A plain-English glossary of brain tumour, hydrocephalus, chemotherapy, radiotherapy, BRAF and paediatric low-grade glioma terms.',
  the_bfg: 'How Roald Dahl, Stanley Wade and Kenneth Till developed the Wade–Dahl–Till shunt valve for childhood hydrocephalus.',
  pilocytic_astrocytomas: 'Pilocytic astrocytoma explained: classification, molecular features, prognosis and treatment context updated for 2026.',
  braf: 'BRAF alterations in paediatric low-grade glioma, including KIAA1549::BRAF fusion, BRAF V600E and targeted treatment in 2026.',
  three_main_mainstream_interventions: 'How surgery, chemotherapy, radiotherapy, observation and targeted medicines are used for paediatric low-grade glioma in 2026.',
  treatment_outcomes: 'Current evidence on survival, progression, late effects and treatment outcomes for childhood low-grade glioma.',
  mainstream_trials: 'Emerging and targeted treatments for paediatric low-grade glioma, including BRAF, MEK and RAF inhibitors, updated for 2026.',
  childhood_incidence_rates: 'Historical and current context for childhood brain tumour incidence rates in Britain and the UK.',
  general_incidence_rates: 'UK brain tumour incidence and mortality statistics, with historical figures and definitions updated for 2026.',
  the_funding_gap: 'Historical and 2026 evidence about UK brain tumour research funding, investment and research infrastructure.',
  the_alternative_options: 'An honest reassessment of the alternative cancer treatments a frightened father considered, without endorsing unproven remedies.',
  the_cancer_act: 'A plain-English explanation of section 4 of the Cancer Act 1939 and its restrictions on advertising cancer treatments.',
  convention_on_the_rights_of_persons_with_disabilit: 'The UN disability convention, parental responsibility and how treatment disputes involving children are decided in England and Wales.',
  where_treatment_has_been_ordered_by_the_courts: 'The Neon Roberts case and how the High Court decides serious medical-treatment disputes involving children.',
  sources_and_further_reading: 'Consolidated medical, statistical, legal and literary sources for On Slender Strings, checked and updated in August 2026.',
}

export const bookEntryDescription = (manifest: BookManifest, entry: BookEntry): string => {
  if (manifest.slug !== 'on-slender-strings') {
    return `${entry.title}, from ${manifest.title} by Dr Steve Huckle.`
  }

  if (!entry.route) return onSlenderStringsDescription

  const key = entry.route.split('/').at(-1) ?? ''
  return topicDescriptions[key]
    ?? `${entry.title}, from On Slender Strings: the true story of a father’s love, fear and his daughter’s childhood brain tumour.`
}

export const onSlenderStringsKeywords = [
  'childhood brain tumour',
  'pilocytic astrocytoma',
  'childhood cancer',
  'brain surgery',
  'chemotherapy',
  'scanxiety',
  'parent experience',
  'paediatric low-grade glioma',
  'BRAF',
  'hydrocephalus',
  'childhood brain tumour true story',
]
