import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
    name: 'results',
    initialState: [],
    reducers: {
        addResult(state, action) {
           state.push(action.payload)
        },
        clearResultsState(state) {
            return state = [];
        }
    }
});

export const { addResult, clearResultsState } = resultsSlice.actions;