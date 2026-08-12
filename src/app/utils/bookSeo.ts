import type { BookEntry, BookManifest } from '@/app/utils/bookRegistry'

const bookDescription = 'A father’s personal account of his daughter’s childhood pilocytic astrocytoma, brain surgery, recurrence and chemotherapy.'

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
  treatment_outcomes: 'Background information about treatment outcomes for childhood pilocytic astrocytoma.',
  childhood_incidence_rates: 'Background information about childhood brain tumour incidence rates.',
}

export const bookEntryDescription = (manifest: BookManifest, entry: BookEntry): string => {
  if (manifest.slug !== 'on-slender-strings') {
    return `${entry.title}, from ${manifest.title} by Dr Steve Huckle.`
  }

  if (!entry.route) return bookDescription

  const key = entry.route.split('/').at(-1) ?? ''
  return topicDescriptions[key]
    ?? `${entry.title}, from On Slender Strings: a father’s personal story of love, fear and his daughter’s childhood brain tumour.`
}

export const onSlenderStringsKeywords = [
  'childhood brain tumour',
  'pilocytic astrocytoma',
  'childhood cancer',
  'brain surgery',
  'chemotherapy',
  'scanxiety',
  'parent experience',
]
