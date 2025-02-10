import { PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "../types/search";
import { UserSearchHistory } from "../../types/history";

export const searchReducers = {
    setSearchedHistory(state: SearchState, action: PayloadAction<UserSearchHistory>){
        const oldState = state.searchHistory
        const newState = [...oldState, action.payload]
        state.searchHistory = newState
    },
    deleteSearchedHistory(state: SearchState){
        state.searchHistory = []
    }

}