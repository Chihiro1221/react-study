import React, { Component } from 'react';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => ({ num: state.num + 1 }));
  }

  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={() => this.increment()}>按钮+1 —— 方式1</button>
        <button onClick={this.increment.bind(this)}>按钮+1 —— 方式2</button>
        <button onClick={this.increment}>按钮+1 —— 方式3</button>
      </div>
    );
  }
}
