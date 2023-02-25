import { configureStore } from '@reduxjs/toolkit'
import originalSlice from './originalSlice'
import trendingSlice from './trendingSlice'

export const store = configureStore({
  reducer: {
    netflixOriginal:originalSlice,
    trending:trendingSlice,

  },
})