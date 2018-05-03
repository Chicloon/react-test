import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import session from './session'
import news from './news'

export default combineReducers({
  session,
  news,
  form: formReducer,
})
