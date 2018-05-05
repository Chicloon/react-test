import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchProfile } from '../actions/ProfileActions'
import Spinner from '../components/Spinner'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { dispatch, user } = this.props
    dispatch(fetchProfile(user.data.id))
  }

  render() {
    const { profile } = this.props
    if (profile.profile) {
      if (profile.profile.status === 'ok') {
        return <Profile profile={profile.profile.data} />
      } else {
        return <h4 style={{ color: 'red' }}>Пользователь не найден</h4>
      }
    }
    if (profile.error) {
      return <h4 style={{ color: 'red' }}> {profile.error.message}</h4>
    }
    return <Spinner />
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.session.user,
})

export default connect(mapStateToProps)(ProfileContainer)
