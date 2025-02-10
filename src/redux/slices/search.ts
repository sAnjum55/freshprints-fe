import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state/search";
import { searchReducers } from "../reducers/search";

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: searchReducers
})

export const searchActions = searchSlice.actions;
export const searchReducer =  searchSlice.reducer;