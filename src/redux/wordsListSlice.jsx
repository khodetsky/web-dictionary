import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initWords } from "../components/initWordsArr";

const wordsListSlice = createSlice({
    name: 'words',
    initialState: {
        wordsList: initWords
    },
    reducers: {
        addWord(state, action) {
            state.wordsList.push(action.payload);
        },
    }
});

const persistConfig = {
    key: 'words',
    storage,
};

export const wordsListReducer = persistReducer(persistConfig, wordsListSlice.reducer);

export const { addWord } = wordsListSlice.actions;