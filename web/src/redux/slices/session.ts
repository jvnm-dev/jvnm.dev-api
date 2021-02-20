import {createSlice, Slice} from '@reduxjs/toolkit'

export interface ISession {
    token: string
}

export interface ISessionReducer {
    session: ISession
}

export const sessionSlice: Slice = createSlice({
    name: 'session',
    initialState: {},
    reducers: {
        setToken: (state, action) => state = {
            ...state,
            token: action.payload,
        }
    }
})

export const { setToken } = sessionSlice.actions
export default sessionSlice.reducer