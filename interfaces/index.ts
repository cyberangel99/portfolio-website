import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse'
import { Document } from '@prismicio/client/types/documents'
import { Link, RichTextBlock } from 'prismic-reactjs'

// AUTHOR
export interface IAuthor extends Document {
  data: {
    bio?: RichTextBlock[]
    location?: string
    name?: string
    profile_image?: RichTextBlock
    slug?: string
  }
}
export interface IAuthorLink extends Link {
  data?: {
    bio?: RichTextBlock[]
    location?: string
    name?: string
    profile_image?: RichTextBlock
    slug?: string
  }
}

// CATEGORY
export interface ICategory extends Document {
  data: {
    color?: string
    description?: string
    image?: RichTextBlock
    name?: string
    slug?: string
  }
}
export interface ICategoryLink extends Link {
  data?: {
    color?: string
    description?: string
    image?: RichTextBlock
    name?: string
    slug?: string
  }
}

// POST
export interface IPost extends Document {
  data: {
    authors?: [{ author: IAuthorLink }]
    canonical_url?: Link
    categories?: [{ category: ICategoryLink }]
    content?: RichTextBlock[]
    excerpt?: string
    feature_image?: RichTextBlock
    featured?: boolean
    meta_description?: string
    meta_title?: string
    og_description?: string
    og_image?: RichTextBlock
    og_title?: string
    primary_author?: IAuthorLink
    primary_category?: ICategoryLink
    title?: RichTextBlock[]
  }
}
export interface IPostApiSearchResponse extends ApiSearchResponse {
  results: IPost[]
}

// PAGINATION
export interface IPagination {
  next_page?: string
  page?: number
  prev_page?: string
  results_per_page?: number
  results_size?: number
  total_pages?: number
  total_results_size?: number
}

// SEARCH
export interface ISearchApiResponse extends ApiSearchResponse {
  results: IPost[]
}

// UI
export type IHashRouteMenuItem = {
  name: string
  hash: string
  color: string
}

// CONTACT
export type IContactPayload = {
  name: string
  email: string
  phone?: string
  organization?: string
  message: string
  reason: string
}
