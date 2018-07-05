import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import stores from './stores'
import { Provider } from 'mobx-react'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
