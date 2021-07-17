import { createSlice } from '@reduxjs/toolkit'
import { ITheme } from '../../constants/themes'

export interface IThemeReducer {
    theme: string
}

export interface IThemes {
    [key: string]: ITheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'THEME_LIGHT',
    reducers: {
        setTheme: (state, action) => (state = action.payload),
    },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
