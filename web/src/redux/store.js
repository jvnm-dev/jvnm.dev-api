import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import themeReducer from '../redux/slices/themes'
import availabilityReducer from '../redux/slices/availability'
import experiencesReducer from '../redux/slices/experiences'
import technologiesReducer from '../redux/slices/technologies'
import projectsReducer from '../redux/slices/projects'

const reducers = combineReducers({
  theme: themeReducer,
  availability: availabilityReducer,
  experiences: experiencesReducer,
  technologies: technologiesReducer,
  projects: projectsReducer,
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)
