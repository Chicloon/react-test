import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/SessionActions'
import Login from '../components/Login'

const LoginContainer = props => {
  return <Login />
}

export default LoginContainer
