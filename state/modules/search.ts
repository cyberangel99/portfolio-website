/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IPagination, IPost } from '../../interfaces'
import search from '../../services/search'
import getPagination from '../../utils/pagination'
import { Prismic } from '../../utils/prismic'

type InitialState = {
  data: IPost[]
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
  error: any
  pagination: IPagination
}

export const globalSearch = createAsyncThunk<any, any>(
  'search/globalSearch',
  async (searchValue: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const results = await search(
        { pageSize: 50 },
        Prismic.Predicates.fulltext('document', searchValue)
      )
      const pagination = getPagination(results)
      thunkAPI.dispatch(setSearchResults(results))

      thunkAPI.dispatch(setPagination(pagination))
      return results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    error: null
  } as InitialState,
  reducers: {
    setSearchResults(state, { payload }) {
      state.data = payload.results
    },
    clearSearchResults(state) {
      state.data = null
      state.pagination = null
    },
    setPagination(state, { payload }) {
      state.pagination = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(globalSearch.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.isError = false
      })
      .addCase(globalSearch.fulfilled, (state, action) => {
        state.data = action.payload.results
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
      })
      .addCase(globalSearch.rejected, (state, action) => {
        state.error = action.payload
        state.isSuccess = false
        state.isLoading = false
        state.isError = true
      })
  }
})

export const { setSearchResults, clearSearchResults, setPagination } = searchSlice.actions
export default searchSlice.reducer
