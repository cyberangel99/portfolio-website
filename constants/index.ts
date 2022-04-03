export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  PROJECTS: '/projects',
  CONTACT: '/contact'
}

export const HASH_ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact'
}

export const HASH_ROUTE_MENU_ITEMS = [
  { name: 'Home', hash: HASH_ROUTES.HOME, color: 'primary' },
  { name: 'About', hash: HASH_ROUTES.ABOUT, color: 'primary' },
  { name: 'Skills', hash: HASH_ROUTES.SKILLS, color: 'primary' },
  { name: 'projects', hash: HASH_ROUTES.PROJECTS, color: 'primary' },
  { name: 'Contact', hash: HASH_ROUTES.CONTACT, color: 'primary' }
]

export const MENU_ITEMS = [
  { name: 'Home', url: ROUTES.HOME },
  { name: 'About', url: ROUTES.ABOUT },
  { name: 'Skills', url: ROUTES.SKILLS },
  { name: 'projects', url: ROUTES.PROJECTS },
  { name: 'Contact', url: ROUTES.CONTACT }
]
