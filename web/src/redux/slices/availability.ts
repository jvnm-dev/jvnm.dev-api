import {createSlice, Slice} from '@reduxjs/toolkit'
import { AVAILABILITIES } from '../../constants'

export interface IAvailabilityReducer {
    availability: {
        status: string,
        statusText: string,
    }
}

const availabilitySlice: Slice = createSlice({
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