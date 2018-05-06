import React from 'react'
import Login from '../components/Login'
import { observer } from 'mobx-react';

@observer(['user'])
class LoginContainer extends React.Component {
  
  logIn = async (values)=>  await this.props.user.logIn(values)    

  render() { 
    return <Login logIn={this.logIn} />
  }
}

export default LoginContainer
