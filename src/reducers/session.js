import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

export default (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      if (!action.error) {
        return {
          ...state,
          user: action.payload,
        }
      } else {
        return {
          ...state,
          error: action.error,
        }
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
