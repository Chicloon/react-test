import React from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/NewsActions'
import LinkBtn from '../components/LinkBtn'
import { logOut } from '../actions/SessionActions'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class MenuContainer extends React.Component {
  renderExitButton = () => {
    const { user, logOut, history } = this.props
    const redirectHome = () => {
      history.push('/')
    }

    if (user && user.data) {
      return (
        <Button secondary onClick={() => logOut(redirectHome)}>
          Выйти
        </Button>
      )
    }
    return <LinkBtn to="/login" label={'Войти'} />
  }

  render() {
    const { user } = this.props
    console.log(this.props)
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
  logOut: cb => dispatch(logOut(cb)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
)
