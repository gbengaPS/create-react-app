import React, { Component } from 'react'

const AppContext = React.createContext()

class Store extends Component {
  state = {
    name: 'adeola alokolaro',
    age: 21,
    email: 'adeola.alokolaro@gmail.com'
  }
  grow = () => {
    this.setState({
      age: this.state.age + 1
    })
  }
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, grow: this.grow }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class Family extends Component {
  render() {
    return (
      <div>
        <Parent />
        <Child />
      </div>
    )
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <p> this is the Parent component</p>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <p> Your name is: {context.state.name} </p>
                <p> Your age is: {context.state.age} </p>
                <button onClick={context.grow}>Grow</button>
              </React.Fragment>
            )
          }}
        </AppContext.Consumer>
      </div>
    )
  }
}
export { Family, Store }
