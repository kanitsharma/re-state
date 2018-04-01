import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ReState from './store'

const initialState = {
  Name: 'Kanit'
}

ReactDOM.render(
  <ReState store={initialState} >
    <App />
  </ReState>,
  document.getElementById('root')
)
registerServiceWorker()
