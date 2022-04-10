import { combineReducers } from '@reduxjs/toolkit'

import contactReducer from './modules/contact'

const rootReducer = combineReducers({
  contact: contactReducer
})

export default rootReducer
