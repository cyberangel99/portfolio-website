import { IAuthor } from '../interfaces'
import { PrismicClient } from '../utils/prismic'

// Get single author
const getAuthor = async (slug: string, options = {}): Promise<IAuthor> => {
  try {
    const author = (await PrismicClient.getByUID('authors', slug, {
      ...options
    })) as IAuthor
    return author
  } catch (error) {
    throw new Error(error)
  }
}

export default getAuthor
