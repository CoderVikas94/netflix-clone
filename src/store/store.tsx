import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './actionSlice'
import comedySlice from './comedySlice'
import documentarySlice from './documentarySlice'
import horrorSlice from './horrorSlice'
import movieSlice from './movieSlice'
import originalSlice from './originalSlice'
import romanceSlice from './romanceSlice'
import topRatedSlice from './topRatedSlice'
import trendingSlice from './trendingSlice'

export const store = configureStore({
  reducer: {
    netflixOriginal:originalSlice,
    trending:trendingSlice,
    topRated:topRatedSlice,
    action :actionSlice,
    comedy :comedySlice,
    horror:horrorSlice,
    romance:romanceSlice,
    documentary:documentarySlice,
    movie:movieSlice,

  },
})