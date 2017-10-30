import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import PropTypes from 'prop-types';
// HOC
class Test extends Component {
  static contextTypes = {
    app: PropTypes.object.isRequired
  }
  render() {

    return (
      <div>{JSON.stringify(this.context)}</div>
    )
  }
}

class App extends Component {
  static childContextTypes = {
    app: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'Aram',
      lastname: 'Aramyan'
    }
  }
  getChildContext() {
    return {
      app: { name: 'Anun' }
    }
  }
  componentDidMount() {
    this.state.name = "Urish Anun"
  }
  changeLastName = () => {
    this.setState({
      lastname: "Urish lastname"
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.name}
        {this.state.lastname}
        <Form />
      </div>
    );
  }
}

export default App;
