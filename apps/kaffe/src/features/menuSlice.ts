import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.show = true
    },
    closeMenu: (state) => {
      state.show = false
    },
  },
})

export const { openMenu, closeMenu } = menuSlice.actions
export default menuSlice.reducer
