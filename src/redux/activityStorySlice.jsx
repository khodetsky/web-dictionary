import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const activityStorySlice = createSlice({
    name: 'activityStory',
    initialState: {
        activityStory: [
            {
                date: "02.05.2023, 18:41:36",
                result: 80,
            },
            {
                date: "02.05.2023, 18:41:36",
                result: 70,
            },
            {
                date: "02.05.2023, 18:41:36",
                result: 90,
            }
        ]
    },
    reducers: {
        addActivity(state, action) {
            state.activityStory.push(action.payload);
        },
    }
});

const persistConfig = {
    key: 'activityStory',
    storage,
};

export const activityStoryReducer = persistReducer(persistConfig, activityStorySlice.reducer);

export const { addActivity } = activityStorySlice.actions;