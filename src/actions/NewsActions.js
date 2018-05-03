import axios from 'axios'

export const FETCH_NEWS = 'FETCH_NEWS'

const ROOT_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/'

export function fetchNews() {
  const request = axios.get(`${ROOT_URL}news`)

  return disptach => {
    request.then(data => {
      disptach({
        type: FETCH_NEWS,
        payload: data,
      })
    })
  }
}
