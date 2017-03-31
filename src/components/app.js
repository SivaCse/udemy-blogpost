import React, { Component } from 'react';

export default class App extends Component {
  render() {
    // {this.props.children is where we want to render the child routes}
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}
