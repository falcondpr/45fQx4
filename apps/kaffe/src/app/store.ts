import { configureStore } from '@reduxjs/toolkit'

import menuSlice from '../features/menuSlice'

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
})
