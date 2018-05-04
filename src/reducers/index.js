import { combineReducers } from 'redux'

import session from './session'
import news from './news'
import profile from './profile'

export default combineReducers({
  session,
  news,
  profile,
})
