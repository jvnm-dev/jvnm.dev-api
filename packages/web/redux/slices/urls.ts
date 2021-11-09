import { createSlice, Slice } from '@reduxjs/toolkit'

export interface IUrl {
    id: number
    original: string
    shortcut: string
}

export interface IUrlReducer {
    urls: IUrl[]
}

const urlsSlice: Slice = createSlice({
    name: 'urls',
    initialState: [],
    reducers: {
        setUrls: (state, action) => (state = action.payload),
    },
})

export const { setUrls } = urlsSlice.actions
export default urlsSlice.reducer
