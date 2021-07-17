import { createSlice, Slice } from '@reduxjs/toolkit'

export interface ITechnology {
    id: string
    image: string
    name: string
}

export interface ITechnologiesReducer {
    technologies: ITechnology[]
}

const technologiesSlice: Slice = createSlice({
    name: 'technologies',
    initialState: [],
    reducers: {
        setTechnologies: (state, action) => (state = action.payload),
    },
})

export const { setTechnologies } = technologiesSlice.actions
export default technologiesSlice.reducer
