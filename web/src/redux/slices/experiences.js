import { createSlice } from '@reduxjs/toolkit'

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {
    setExperiences: (state, action) => state = action.payload
  }
})

export const { setExperiences } = experiencesSlice.actions
export default experiencesSlice.reducer
