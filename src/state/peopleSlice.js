import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  people: [],
  page: 1,
  totalPages: 9,
}

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {

    addPeople(state, action) {
    const newPeople = action.payload.filter(
        (person) => !state.people.some((p) => p.url === person.url)
    );
    state.people = [...state.people, ...newPeople];
    },

    nextPage(state) {
      if ( state.totalPages > state.page ) {
        state.page += 1
      }
    }
  },
})

export const { addPeople, nextPage, resetPeople } = peopleSlice.actions
export default peopleSlice.reducer