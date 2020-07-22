import { createSlice } from '@reduxjs/toolkit'

const sessionSlice = createSlice({
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
