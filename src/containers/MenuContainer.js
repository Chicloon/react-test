import React from 'react'
import { connect } from 'react-redux'
import LinkBtn from '../components/LinkBtn'
import { logOut } from '../actions/SessionActions'
import { Button } from 'semantic-ui-react'

class MenuContainer extends React.Component {
  renderExitButton = () => {
    const { user, logOut } = this.props

    if (user && user.data) {
      return (
        <Button secondary onClick={() => logOut()}>
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
        {user && user.data && <LinkBtn to="/profile" label={'Профиль'} />}
        {this.renderExitButton()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
