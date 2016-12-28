import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './components/app'
import reducers from './reducers'

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container')
)
