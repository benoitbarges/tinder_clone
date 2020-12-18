import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '../../assets/stylesheets/application.scss'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import App from './components/App'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
)
