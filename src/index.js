import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ReState from 'react-deflux'
import { initialState } from './store'
import fetchDataMiddleWare from './fetchmiddleware'

ReactDOM.render(
  <ReState
    store={initialState.toObject()}
    applyMiddleWare={fetchDataMiddleWare}
  >
    <App />
  </ReState>,
  document.getElementById('root')
)
registerServiceWorker()
