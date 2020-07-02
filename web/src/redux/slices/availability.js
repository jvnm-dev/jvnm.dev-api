import { createSlice } from '@reduxjs/toolkit'
import { AVAILABILITIES } from '../../constants'


const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    status: AVAILABILITIES.loading,
    statusText: 'Maybe available',
  },
  reducers: {
    setAvailability: (state, action) => state = action.payload
  }
})

export const { setAvailability } = availabilitySlice.actions
export default availabilitySlice.reducer
