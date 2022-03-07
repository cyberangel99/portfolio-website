import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IContactPayload } from '../../interfaces'

import sendContact from '../../services/contact'

type InitialState = {
  data: IContactPayload
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
  error: any
}

export const sendMessage = createAsyncThunk<any, any>(
  'contact/sendContact',
  async (values: IContactPayload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await sendContact(values)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    data: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    error: null
  } as InitialState,
  reducers: {
    resetContact(state) {
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.isError = false
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.data = action.payload.results
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.payload
        state.isSuccess = false
        state.isLoading = false
        state.isError = true
      })
  }
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer
