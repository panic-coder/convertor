import React, { Component } from "react";
import "react-dropdown/style.css";
const options = [
  { value: "km", name: "kilometre" },
  { value: "m", name: "metre" },
  { value: "cm", name: "centimetre" },
];
let inputValue = 1;
let first: any = "km";
let second: any = "km";
let output: any = 0;
type MyProps = {};

type MyState = { input: number; output: number };

class Convertor extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: 1,
      output: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  onSelect1(value: any) {
    console.log("On Select 1", value.target.value);
    first = value.target.value;
    first = JSON.parse(first);
    first = first["value"];
  }
  onSelect2(event: any) {
    console.log("On Select 2", event.target.value);
    second = event.target.value;
    console.log("parse ", JSON.parse(second));
    second = JSON.parse(second);
    second = second["value"];
  }
  handleChange = (event: any) => {
    this.setState({
      input: event.target.value,
    });
    inputValue = event.target.value;
  };
  updateState() {
    let formula: any = {
      kmTom: 1000,
      kmTocm: 100000,
      mTokm: 0.001,
      mTocm: 100,
      cmTokm: 0.00001,
      cmTom: 0.01,
    };
    console.log("On calculate", inputValue);
    console.log("first ", first);
    console.log("second ", second);
    if (first === second) {
      output = first;
    } else {
      let key = first + "To" + second;
      output = formula[key] * Number(inputValue);
      console.log(output);
      this.setState({ output: output });
      //   const handleQtyChanged = (event: any) => setQuantity(output);
      //   this.setState({
      //     output: output,
      //   });
      //   this.getInputValue("e");
    }
  }
  //   updateState(value: any) {
  //     console.log("value", value);
  //     // Changing state
  //   }
  render() {
    return (
      <div>
        <div>Convertor</div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <select id="mySelect" onChange={(choice) => this.onSelect1(choice)}>
          {options.map((options) => (
            <option key={options.value} value={JSON.stringify(options)}>
              {options.value}
            </option>
          ))}
        </select>
        <select id="mySelect1" onChange={(choice) => this.onSelect2(choice)}>
          {options.map((options) => (
            <option key={options.value} value={JSON.stringify(options)}>
              {options.value}
            </option>
          ))}
        </select>
        <button onClick={this.updateState}>Convert</button>
        <div>{this.state.output}</div>
      </div>
    );
  }
}

export default Convertor;
