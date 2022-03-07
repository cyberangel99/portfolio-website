import { ROUTES } from '../constants'

const linkResolver = (doc: any) => {
  if (doc.type === 'posts') return `${ROUTES.POSTS}/${doc.uid}`

  if (doc.link_type === 'Web') {
    return doc.url
  }
  // Fallback URL
  return '/'
}

export default linkResolver
