import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Family, Store } from './components/ContextApi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store>
          <Family />
        </Store>
      </div>
    )
  }
}

export default App
