import { configureStore } from "@reduxjs/toolkit";
import { wordsListReducer } from '../redux/wordsListSlice';
import { activityStoryReducer } from "../redux/activityStorySlice";
import { persistStore,   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

export const store = configureStore({
    reducer: {
        words: wordsListReducer,
        activityStory: activityStoryReducer
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