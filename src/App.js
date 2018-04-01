import React from 'react'
import './App.css'
import { connect } from './restate'

const App = ({ apiData, changeName }) => (
  <div className="App">
    <div>
      <button onClick={changeName} > Change Name </button>
    </div>
    {
      JSON.stringify(apiData)
    }
  </div>
)

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  changeName: _ => dispatch({ type: 'FETCH_DATA'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
