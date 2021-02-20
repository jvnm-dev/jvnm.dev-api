import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import sessionReducer from './slices/session'
import themeReducer from './slices/themes'
import availabilityReducer from './slices/availability'
import experiencesReducer from './slices/experiences'
import technologiesReducer from './slices/technologies'
import projectsReducer from './slices/projects'
import {Persistor} from "redux-persist/es/types";

export const reducers = combineReducers({
    session: sessionReducer,
    theme: themeReducer,
    availability: availabilityReducer,
    experiences: experiencesReducer,
    technologies: technologiesReducer,
    projects: projectsReducer,
})

const persistConfig  = {
    key: 'root',
    whitelist: ['session', 'theme'],
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store: Store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor: Persistor = persistStore(store)