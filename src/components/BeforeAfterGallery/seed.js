/**
 * Static seed gallery entries — the starter images from before the
 * admin-driven gallery existed. These render on the Our Work section
 * alongside any dynamic entries fetched from the published submissions
 * manifest. Safe to trim or remove once real client work has replaced
 * these.
 *
 * URLs are relative to /public/images — kept in-repo rather than in
 * Blob because they pre-date any client submission and don't belong
 * attached to a submission record.
 */
export const SEED_IMAGES = [
  {
    category: 'Pruning',
    type: 'before',
    url: '/images/pruning/weeping-waterfall-japanese-maple_before-2.webp',
    caption: 'Trees blocking the pathway',
    alt: 'Pruning before - Overgrown branches blocking pathway',
  },
  {
    category: 'Pruning',
    type: 'before',
    url: '/images/pruning/weeping-waterfall-japanese-maple_before-3.webp',
    caption: 'The garden is in need of pruning',
    alt: 'Pruning before - garden needs pruning',
  },
  {
    category: 'Pruning',
    type: 'after',
    url: '/images/pruning/weeping-waterfall-japanese-maple_after-1.webp',
    caption: 'Bushes pruned nicely',
    alt: 'Pruning after - bushes pruned',
  },
  {
    category: 'Pruning',
    type: 'after',
    url: '/images/pruning/weeping-waterfall-japanese-maple_after-4.webp',
    caption: '',
    alt: 'Pruning after',
  },
  {
    category: 'Pruning',
    type: 'after',
    url: '/images/pruning/weeping-waterfall-japanese-maple_after-5.webp',
    caption: '',
    alt: 'Pruning after',
  },
  {
    category: 'Pruning',
    type: 'after',
    url: '/images/pruning/weeping-waterfall-japanese-maple_after-6.webp',
    caption: '',
    alt: 'Pruning after',
  },
  {
    category: 'Pruning',
    type: 'after',
    url: '/images/pruning/weeping-waterfall-japanese-maple_after-7.webp',
    caption: '',
    alt: 'Pruning after',
  },
  {
    category: 'Lawn Care',
    type: 'before',
    url: '/images/bed-edge/bed-edge-before.webp',
    caption: 'Overgrown grass over bed edging',
    alt: 'Edging before',
  },
  {
    category: 'Lawn Care',
    type: 'after',
    url: '/images/bed-edge/bed-edge-after.webp',
    caption: 'Overgrown grass after cleanup',
    alt: 'Edging after',
  },
  {
    category: 'Lawn Care',
    type: 'after',
    url: '/images/bed-edge/bed-edge-after-1.webp',
    caption: 'Overgrown grass after cleanup',
    alt: 'Edging after',
  },
];
