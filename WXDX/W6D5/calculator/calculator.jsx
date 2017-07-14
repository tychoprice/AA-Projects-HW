import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num1: "", num2: "", result: 0};
    // this.num1 = this.num1.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <h2>{this.state.num1} || {this.state.num2}</h2>
        // <input onChange={this.num1} value={this.num1}/>
      </div>
    );
  }
}

export default Calculator;
