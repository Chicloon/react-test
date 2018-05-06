import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/SessionActions'
import Login from '../components/Login'
import { observer } from 'mobx-react';

@observer(['user'])
class LoginContainer extends React.Component {
  
  logIn = async (values)=> {
    const resp = await this.props.user.logIn(values);
  }

  render() {
    console.error(this.props.user.error)    
    return <Login logIn={this.logIn} loginError = {this.props.user.error}/>

  }
}

export default LoginContainer
