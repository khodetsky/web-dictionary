import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const activityStorySlice = createSlice({
    name: 'story',
    initialState: {
        activityStory: []
    },
    reducers: {
        addActivity(state, action) {
            state.activityStory.push(action.payload);
        },
    }
});

const persistConfig = {
    key: 'story',
    storage,
};

export const activityStoryReducer = persistReducer(persistConfig, activityStorySlice.reducer);

export const { addActivity } = activityStorySlice.actions;