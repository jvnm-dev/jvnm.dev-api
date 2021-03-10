import { createSlice, Slice } from '@reduxjs/toolkit'

export interface ISession {
    token: string
}

export interface ISessionPayload {
    payload: string
}

export interface ISessionReducer {
    session: ISession
}

export const sessionSlice: Slice = createSlice({
    name: 'session',
    initialState: {},
    reducers: {
        setToken: (state: ISession, action: ISessionPayload) =>
            (state = {
                ...state,
                token: action.payload,
            }),
    },
})

export const { setToken } = sessionSlice.actions
export default sessionSlice.reducer
