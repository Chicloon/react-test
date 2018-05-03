import axios from 'axios'

import { ROOT_URL } from '../helpers/constants'
// import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  console.log(params)
  const request = axios.post(`${ROOT_URL}validatea`, {
    ...params,
  })

  return dispatch => {
    dispatch({
      type: LOG_IN,
      payload: request,
    })
  }

  // return dispatch => {
  //   request
  //     .then(data => {
  //       dispatch({
  //         type: LOG_IN,
  //         payload: data.data,
  //         error: null,
  //       })
  //     })
  //     .catch(error => {
  //       dispatch({
  //         type: LOG_IN,
  //         payload: null,
  //         error,
  //       })
  //     })
  // }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}
