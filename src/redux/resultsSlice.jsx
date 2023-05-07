import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
    name: 'results',
    initialState: [],
    reducers: {
        addResult(state, action) {
           state.push(action.payload)
        },
        addResultsFromStorage(state, action) {
            return state = action.payload;
        },
        clearResultsState(state) {
            return state = [];
        }
    }
});

export const { addResult, clearResultsState, addResultsFromStorage } = resultsSlice.actions;