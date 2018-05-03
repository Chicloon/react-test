import axios from 'axios'

export const FETCH_NEWS = 'FETCH_NEWS'

const ROOT_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/'

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
