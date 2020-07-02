import { configureStore } from '@reduxjs/toolkit'

import availabilityReducer from '../redux/slices/availability'

export const store = configureStore({
  reducer: {
    availability: availabilityReducer
  }
})
