import React from 'react'

const context = React.createContext()
export const { Provider, Consumer } = context

export default class ReState extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props.store
    }
  }

  dispatch = ({ type, payload }) => {
    this.setState(
      (prevState, props) => ({ ...payload }),
      _ => console.log({ type: type, nextState: this.state })
    )
  }

  render () {
    return (
      <Provider value={{
        store: this.state,
        dispatch: this.dispatch
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const connect = (mapStateToProps, mapDispatchToProps) => (
  Component => (
    <Consumer>
      {
        ({ store, dispatch }) => (<Component {...mapStateToProps(store)} {...mapDispatchToProps(dispatch)} />)
      }
    </Consumer>
  )
)
