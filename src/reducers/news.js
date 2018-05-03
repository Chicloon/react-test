// import _ from 'lodash'
import { FETCH_NEWS } from '../actions/NewsActions'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      // console.log(action.payload.data, action.payload.data.data)
      console.log(action)
      if (action.payload) {
        return { data: action.payload.data, error: null }
      } else {
        return { data: '', error: action.error }
      }
    default:
      return state
  }
}
