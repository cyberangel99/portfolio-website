import { combineReducers } from '@reduxjs/toolkit'

import contactReducer from './modules/contact'
import postsReducer from './modules/posts'
import searchReducer from './modules/search'
import uiReducer from './modules/ui'

const rootReducer = combineReducers({
  contact: contactReducer,
  posts: postsReducer,
  search: searchReducer,
  ui: uiReducer
})

export default rootReducer
