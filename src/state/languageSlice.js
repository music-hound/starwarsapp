import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isWookie: false,
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage(state) {
      state.isWookie = !state.isWookie
    },
  },
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
