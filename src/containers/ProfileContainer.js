import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { LOCAL_STORAGE } from '../helpers/constants'
import { fetchProfile } from '../actions/ProfileActions'
import Spinner from '../components/Spinner'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProfile(localStorage.getItem(LOCAL_STORAGE)))
  }

  render() {
    const { profile } = this.props
    if (profile.data) {
      return <Profile data={profile.data} />
    }
    if (profile.error) {
      return <h4 style={{ color: 'red' }}> {profile.error.message}</h4>
    }
    return <Spinner />
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps)(ProfileContainer)
