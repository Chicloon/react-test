import axios from 'axios'
import { ROOT_URL } from '../helpers/constants'

export const PROFILE = 'PROFILE'

export function fetchProfile(id) {
  const request = axios.get(`${ROOT_URL}user-info/${id}`)
  return dispatch => {
    request
      .then(data => {
        dispatch({
          type: PROFILE,
          payload: data.data,
          error: null,
        })
      })
      .catch(error => {
        dispatch({
          type: PROFILE,
          payload: null,
          error,
        })
      })
  }
}
