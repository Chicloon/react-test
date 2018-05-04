import { PROFILE } from '../actions/ProfileActions'

export default (state = {}, action) => {
  switch (action.type) {
    case PROFILE:
      if (action.payload) {
        return {
          profile: action.payload.data,
          error: null,
        }
      } else {
        return {
          data: '',
          error: action.error,
        }
      }
    default:
      return state
  }
}
