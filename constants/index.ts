export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRICING: '/pricing',
  SERVICES: '/services',
  FAQ: '/faq',
  CONTACT: '/contact',
  POSTS: '/blog'
}

export const HASH_ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  RECENT_POSTS: 'recent-posts',
  CONTACT: 'contact'
}

export const HASH_ROUTE_MENU_ITEMS = [
  { name: 'Home', hash: HASH_ROUTES.HOME, color: 'primary' },
  { name: 'About', hash: HASH_ROUTES.ABOUT, color: 'primary' },
  { name: 'Services', hash: HASH_ROUTES.SERVICES, color: 'primary' },
  { name: 'Recent Posts', hash: HASH_ROUTES.RECENT_POSTS, color: 'primary' },
  { name: 'Contact', hash: HASH_ROUTES.CONTACT, color: 'primary' }
]

export const MENU_ITEMS = [
  { name: 'Home', url: ROUTES.HOME },
  { name: 'About', url: ROUTES.ABOUT },
  {
    name: 'Services',
    url: ROUTES.SERVICES,
    children: [
      { name: 'Websites', url: `${ROUTES.SERVICES}/websites` },
      { name: 'Hosting', url: `${ROUTES.SERVICES}/hosting` }
    ]
  },
  { name: 'Pricing', url: ROUTES.PRICING },
  { name: 'FAQ', url: ROUTES.FAQ },
  { name: 'Contact', url: ROUTES.CONTACT }
]
