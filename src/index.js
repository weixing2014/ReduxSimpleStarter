import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/app'
import reducers from './reducers'

const store = createStore(
  reducers,
  composeWithDevTools()
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container')
)
