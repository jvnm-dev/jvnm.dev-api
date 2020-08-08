import { createSlice } from '@reduxjs/toolkit'

import { themes } from '../../constants'

const themeSlice = createSlice({
  name: 'theme',
  initialState: themes.THEME_LIGHT,
  reducers: {
    setTheme: (state, action) => state = action.payload
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
