# React Deflux

Yet another flux implementation, with bindings for react.
Built over react's new context API.

## Getting Started

Wrap ReState over your root component.

```javascript

import ReState from 'react-deflux';

<ReState
  store={initialState} // initial state of your store
  applyMiddleWare={fetchDataMiddleWare} // Optional, Allows managing side-effects
>
  <App />
</ReState>

```

That's it, now any child component can connect to store.

```javascript

import { connect } from 'react-deflux';

const App = ({ buttonClick }) => (
  <div>
    <button onClick={buttonClick} > Fire Action! </button>
  </div>
);

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  buttonClick: _ => dispatch({ type: 'DUMMY_ACTION'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

```

## Middleware

This the best part. You can pass any function (middleware) to the applyMiddleWare prop, and it will be fired with every action.

```javascript

// Handling async with middleware

export default state => action => dispatch => (
  action.type === 'FETCH_DATA' &&
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHED_DATA', payload: { apiData: json } }))
)

```

