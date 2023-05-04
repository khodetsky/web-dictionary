import { configureStore } from "@reduxjs/toolkit";
import { wordsListReducer } from './wordsListSlice';
import { activityStoryReducer } from "./activityStorySlice";
import { resultsSlice } from "./resultsSlice"
import { persistStore,   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

export const store = configureStore({
    reducer: {
        words: wordsListReducer,
        activityStory: activityStoryReducer,
        results: resultsSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    }
});

export const persistor = persistStore(store);