import axios from 'axios'
import { ROOT_URL } from '../helpers/constants'

export const FETCH_NEWS = 'FETCH_NEWS'

export function fetchNews() {
  const request = axios.get(`${ROOT_URL}news`)

  return dispatch => {
    request
      .then(data => {
        dispatch({
          type: FETCH_NEWS,
          payload: data.data,
          error: null,
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_NEWS,
          payload: null,
          error,
        })
      })
  }
}
