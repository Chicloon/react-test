import React from 'react'
import LinkBtn from '../components/LinkBtn'
import { Button } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react'

@inject('user')
@observer
class MenuContainer extends React.Component {
  renderExitButton = () => {
    const { user } = this.props

    if (user.id) {
      return (
        <Button secondary onClick={() => user.logOut()}>
          Выйти
        </Button>
      )
    }
    return <LinkBtn to="/login" label={'Войти'} />
  }

  render() {
    const { user } = this.props
    
    return (
      <React.Fragment>
        <LinkBtn to="/login" label={'Логин'} />
        <LinkBtn to="/news" label={'Новости'} />
        {user.id && <LinkBtn to="/profile" label={'Профиль'} />}
        {this.renderExitButton()}
      </React.Fragment>
    )
  }
}

export default MenuContainer
