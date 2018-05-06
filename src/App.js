import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import MenuContainer from './containers/MenuContainer'
import ProfileContainer from './containers/ProfileContainer'
import NewsContainer from './containers/NewsContainer'
import NotFound from './components/NotFound'

import './App.css'

// import CssBaseline from 'material-ui/CssBaseline'

const App = () => (
  <div>
    <header className="header">
      <div className="top-menu">
        <MenuContainer />
      </div>
    </header>

    <hr />
    <div className="content">
      <Switch>
        <Redirect exact from="/" to="/login" />
        {/* <Route path="/news" component={NewsContainer} /> */}
        <Route path="/login" component={LoginContainer} />
        {/* <PrivateRoute path="/profile" component={ProfileContainer} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
