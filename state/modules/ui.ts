import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IPagination, IPost } from '../../interfaces'
import { getPosts } from '../../services/posts'
import getPagination from '../../utils/pagination'

type InitialState = {
  recentPosts: {
    data: IPost[]
    isSuccess: boolean
    isLoading: boolean
    isError: boolean
    error: any
    pagination: IPagination
  }
}

export const fetchRecentPosts = createAsyncThunk<any, any>(
  'ui/fetchRecentPosts',
  async (options: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const posts = await getPosts({ pageSize: 10, ...options })
      const pagination = getPagination(posts)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      thunkAPI.dispatch(setRecentPostsPagination(pagination))
      return posts
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    recentPosts: {
      data: null,
      hasMessage: false,
      isSuccess: false,
      isLoading: false,
      isError: false,
      error: null,
      pagination: null
    }
  } as InitialState,
  reducers: {
    setRecentPostsPagination(state, { payload }) {
      state.recentPosts.pagination = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentPosts.pending, (state) => {
        state.recentPosts.isSuccess = false
        state.recentPosts.isLoading = true
        state.recentPosts.isError = false
      })
      .addCase(fetchRecentPosts.fulfilled, (state, action) => {
        state.recentPosts.data = action.payload.results
        state.recentPosts.isSuccess = true
        state.recentPosts.isLoading = false
        state.recentPosts.isError = false
      })
      .addCase(fetchRecentPosts.rejected, (state, action) => {
        state.recentPosts.error = action.payload
        state.recentPosts.isSuccess = false
        state.recentPosts.isLoading = false
        state.recentPosts.isError = true
      })
  }
})

export const { setRecentPostsPagination } = uiSlice.actions
export default uiSlice.reducer
