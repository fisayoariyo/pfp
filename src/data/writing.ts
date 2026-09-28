export type WritingPiece = {
  slug: string
  title: string
  kind: 'poem' | 'prose'
  year: string
  excerpt: string
  body: string[]
}

/** Add new pieces here — each stanza/paragraph is one string in `body`. */
export const writingPieces: WritingPiece[] = [
  {
    slug: 'lagos-light',
    title: 'Lagos Light',
    kind: 'poem',
    year: '2025',
    excerpt: 'A short piece on city nights and quiet ambition.',
    body: [
      'The island hums in sodium gold,',
      'buses argue with the rain.',
      'Somewhere a cursor blinks —',
      'another page, another name.',
      '',
      'I keep a pocket for soft things:',
      'line breaks, unfinished prayers,',
      'the kind of hope that fits',
      'inside a late-night fare.',
    ],
  },
  {
    slug: 'draft-notes',
    title: 'Draft Notes',
    kind: 'prose',
    year: '2025',
    excerpt: 'On making — websites, verses, and the space between.',
    body: [
      'I build interfaces for a living and poems for a life. Both ask for clarity. Both punish decoration without purpose.',
      'This page is where the literary work lives — separate from client projects, honest about craft.',
      'Replace these placeholders with your own pieces whenever you are ready.',
    ],
  },
]
