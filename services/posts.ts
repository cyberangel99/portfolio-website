import { IPost, IPostApiSearchResponse } from '../interfaces'
import { Prismic, PrismicClient } from '../utils/prismic'

const authorLink =
  'authors.name,authors.profile_image,primary_author.name,primary_author.profile_image'
const categoryLink = 'categories.name,primary_category.name,categories.color,primary_category.color'
// Get posts
export const getPosts = async (options = {}, query = ''): Promise<IPostApiSearchResponse> => {
  try {
    const posts = (await PrismicClient.query(
      [Prismic.Predicates.at('document.type', 'posts'), query],
      {
        orderings: '[document.first_publication_date desc]',
        fetchLinks: `${authorLink},${categoryLink}`,
        ...options
      }
    )) as IPostApiSearchResponse
    return posts
  } catch (error) {
    throw new Error(error)
  }
}
// Get single post
export const getPost = async (slug: string, options = {}): Promise<IPost> => {
  try {
    const post = (await PrismicClient.getByUID('posts', slug, {
      ...options,
      fetchLinks: `${authorLink},${categoryLink}`
    })) as IPost
    return post
  } catch (error) {
    throw new Error(error)
  }
}
