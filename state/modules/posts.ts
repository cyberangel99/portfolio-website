import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IPagination, IPost } from '../../interfaces'
import { getPosts } from '../../services/posts'
import getPagination from '../../utils/pagination'

type InitialState = {
  data: IPost[]
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
  error: any
  pagination: IPagination
}

export const fetchPosts = createAsyncThunk<any, any>(
  'posts/fetchPosts',
  async (options: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const posts = await getPosts({ pageSize: 10, ...options })
      const pagination = getPagination(posts)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      thunkAPI.dispatch(setPagination(pagination))
      return posts
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    data: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    error: null,
    pagination: null
  } as InitialState,
  reducers: {
    setPagination(state, { payload }) {
      state.pagination = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload.results
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload
        state.isSuccess = false
        state.isLoading = false
        state.isError = true
      })
  }
})

export const { setPagination } = postSlice.actions

export default postSlice.reducer
