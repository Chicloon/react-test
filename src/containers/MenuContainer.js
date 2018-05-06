import React from 'react'
import { connect } from 'react-redux'
import LinkBtn from '../components/LinkBtn'
import { logOut } from '../actions/SessionActions'
import { Button } from 'semantic-ui-react'
import {observer} from 'mobx-react'

import Spinner from '../components/Spinner';

@observer(['user'])
class MenuContainer extends React.Component {
  // renderExitButton = () => {
  //   const { user, logOut } = this.props

  //   if (user && user.data) {
  //     return (
  //       <Button secondary onClick={() => logOut()}>
  //         Выйти
  //       </Button>
  //     )
  //   }
  //   return <LinkBtn to="/login" label={'Войти'} />
  // }

  // componentWillMount() {
  //   this.props.user.logIn()
  // }

  render() {
    // const { user } = this.props
    console.log(this.props);
    if (this.props.user.isLoading) {
      console.log('...loading')
      return <Spinner />
    }
    return (
      <React.Fragment>
        
        <LinkBtn to="/login" label={'Логин'} />
        {/* <LinkBtn to="/news" label={'Новости'} />
        {user && user.data && <LinkBtn to="/profile" label={'Профиль'} />}
        {this.renderExitButton()} */}
      </React.Fragment>
    )
  }
}

export default MenuContainer
