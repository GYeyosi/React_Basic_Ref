import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
  };

  setA = (e) => {
    this.setState({
      a: parseInt(e.target.value),
    });
  };

  setB = (e) => {
    this.setState({
      b: parseInt(e.target.value),
    });
  };

  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        <input
          className="inputA"
          onChange={(e) => {
            // console.log(e.target.value);
            // this.state.a = e.target.value; ///this way will not work
            // this.setState({
            //   a: parseInt(e.target.value),
            // });
            this.setA(e);
            //THIS ABOVE METHOD MAY CAUSE PERFORMACE ISSUES SO, SEE THE BELOW WAY USED TO SET B
          }}
        />
        <br />
        <input className="inputB" onChange={this.setB} />
        <br />
        {"A: " + this.state.a + ",  " + "B: " + this.state.b} <br />
        {"ADD: " + add}
        <br />
        {"SUB: " + (this.state.a - this.state.b)}
        <br />
        {"MUL: " + this.state.a * this.state.b}
        <br />
        {"DIV: " + this.state.a / this.state.b}
        <br />
      </div>
    );
  }
}

export default Calculator;
