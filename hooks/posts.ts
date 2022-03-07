/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../state/hooks'
import { fetchRecentPosts } from '../state/modules/ui'

const useRecentPosts = (options = {}) => {
  const dispatch = useAppDispatch()
  const result = useAppSelector((state) => state.ui.recentPosts)

  useEffect(() => {
    if (!result.isSuccess) {
      dispatch(fetchRecentPosts(options))
    }
  }, [])

  return {
    ...result
  }
}

export default useRecentPosts
