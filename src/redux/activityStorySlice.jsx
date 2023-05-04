import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const activityStorySlice = createSlice({
    name: 'activityStory',
    initialState: {
        activityStory: []
    },
    reducers: {
        addActivity(state, action) {
            state.activityStory.unshift(action.payload);
        },
    }
});

const persistConfig = {
    key: 'activityStory',
    storage,
};

export const activityStoryReducer = persistReducer(persistConfig, activityStorySlice.reducer);

export const { addActivity } = activityStorySlice.actions;