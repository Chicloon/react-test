import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer

class PrivateRoute extends React.Component {
  render() {
    const {user, path, component} = this.props;
    if (user.id) {
      return <Route path={path} component={component} />
    }

    return <Redirect to="/login"/>
  }
}

export default PrivateRoute
