import React from 'react'
import './App.css'
import { connect } from './restate'

const App = ({ Name, changeName }) => (
  <div className="App">
    <div>
      <h1>Hi! {Name}</h1>
      <button onClick={() => changeName({ type: 'CHANGE_NAME', payload: { Name: 'Sharma' } })} > Change Name </button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  Name: state.Name
})

const mapDispatchToProps = dispatch => ({
  changeName: _ => dispatch({ type: 'CHANGE_NAME', payload: { Name: 'Sharma' } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
