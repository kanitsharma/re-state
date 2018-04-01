import React from 'react'
import Consumer from './store'

export default (mapStateToProps, mapDispatchToProps) => (
  Component => (
    <Consumer>
      {
        ({ store, dispatch }) => (<Component props={{ ...mapStateToProps(store), ...mapDispatchToProps(dispatch) }} />)
      }
    </Consumer>
  )
)