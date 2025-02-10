import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { searchReducer } from './slices/search';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whiteList:['search'],
    version: 1,
}

const rootReducer = combineReducers({
    search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({reducer: persistedReducer});
export const persistor = persistStore(store)
