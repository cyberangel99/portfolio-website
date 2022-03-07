import { ISearchApiResponse } from '../interfaces'
import { Prismic, PrismicClient } from '../utils/prismic'

// Get posts
const search = async (options = {}, query = ''): Promise<ISearchApiResponse> => {
  try {
    const response = (await PrismicClient.query(
      [Prismic.Predicates.any('document.type', ['posts']), query],
      {
        orderings: '[document.first_publication_date desc]',
        ...options
      }
    )) as ISearchApiResponse
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default search
