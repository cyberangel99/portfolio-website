import { Document } from '@prismicio/client/types/documents'

import { PrismicClient } from '../utils/prismic'

// Get single page
export const getPage = async (type: string, slug: string, options = {}): Promise<Document> => {
  try {
    const page = await PrismicClient.getByUID(type, slug, {
      ...options
    })
    return page
  } catch (error) {
    throw new Error(error)
  }
}

export default getPage
