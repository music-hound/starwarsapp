import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characterId: '',
}

const characterSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    characterDetails(state, action) {
      state.characterId = action.payload
    },
  },
})

export const { characterDetails } = characterSlice.actions
export default characterSlice.reducer
