import React from 'react'
import Profile from '../components/Profile'
import Spinner from '../components/Spinner'
import {inject, observer} from 'mobx-react'

@inject('user')
@observer
class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.user.fetchProfile(this.props.user.id)
  }

  render() {
    const {user} = this.props;

    if (user.error) {
      return <h4 style={{ color: 'red' }}>{user.error}</h4>
    }
    
    if(!user.isLoading && user.profile) {
      return <Profile profile={user.profile} />
    }
    
    return <Spinner />
  }
}

export default ProfileContainer
