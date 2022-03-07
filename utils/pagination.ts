import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse'

import { IPagination } from '../interfaces'

const getPagination = (response: ApiSearchResponse): IPagination => {
  const {
    next_page,
    page,
    prev_page,
    results_per_page,
    results_size,
    total_pages,
    total_results_size
  } = response
  return {
    next_page,
    page,
    prev_page,
    results_per_page,
    results_size,
    total_pages,
    total_results_size
  }
}

export default getPagination
