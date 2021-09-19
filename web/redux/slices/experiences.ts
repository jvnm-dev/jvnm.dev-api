import { createSlice, Slice } from '@reduxjs/toolkit'
import { IExperience } from '../../components/landing/experience/Experience'

export interface IExperienceReducer {
    experiences: IExperience[]
}

const experiencesSlice: Slice = createSlice({
    name: 'experiences',
    initialState: [],
    reducers: {
        setExperiences: (state, action) => (state = action.payload),
    },
})

export const { setExperiences } = experiencesSlice.actions
export default experiencesSlice.reducer
