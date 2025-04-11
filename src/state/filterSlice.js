import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filterSelect : ''},
  reducers: {
    filterChange(state, action) {
        state.filterSelect = action.payload
    }
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
