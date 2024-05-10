import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, name: action.payload };
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectFilteredContacts = (state) => state.filters.name;

export const filtersReduser = filtersSlice.reducer;
