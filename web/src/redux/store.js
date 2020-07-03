import { configureStore } from '@reduxjs/toolkit'

import availabilityReducer from '../redux/slices/availability'
import experiencesReducer from '../redux/slices/experiences'
import technologiesReducer from '../redux/slices/technologies'
import projectsReducer from '../redux/slices/projects'

export const store = configureStore({
  reducer: {
    availability: availabilityReducer,
    experiences: experiencesReducer,
    technologies: technologiesReducer,
    projects: projectsReducer,
  }
})
