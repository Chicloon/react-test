import _ from 'lodash'
import { FETCH_NEWS } from '../actions/NewsActions'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      console.log(action.payload.data, action.payload.data.data)
      return action.payload.data.data
    default:
      return state
  }
}
