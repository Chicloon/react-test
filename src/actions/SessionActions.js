import axios from 'axios'
import { ROOT_URL } from '../helpers/constants'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  const request = axios.post(`${ROOT_URL}validate`, {
    ...params,
  })

  return dispatch => {
    request
      .then(data => {
        dispatch({
          type: LOG_IN,
          payload: data.data,
          error: null,
        })
        cb(data.data)
      })
      .catch(error => {
        dispatch({
          type: LOG_IN,
          payload: null,
          error,
        })
        cb({ status: 'err', message: error.message })
      })
  }
}

export function logOut(cb) {
  return dispatch => {
    dispatch({
      type: LOG_OUT,
    })
    cb()
  }
}
