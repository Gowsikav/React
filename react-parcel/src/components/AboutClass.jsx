import React from "react";

import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is called");
    console.log(props);

    this.state = {
      count: 0,
      incrementValue: 1,
      decrementValue: 1,
      resetValue: 0,
      step: 2,
    };
  }

  render() {
    console.log("render method called");

    return (
      <div>
        <p>Count: {this.state.count}</p>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + this.state.incrementValue,
            })
          }
        >
          Increment
        </button>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count - this.state.decrementValue,
            })
          }
        >
          Decrement
        </button>

        <button
          onClick={() =>
            this.setState({
              count: this.state.resetValue,
            })
          }
        >
          Reset
        </button>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + this.state.step,
            })
          }
        >
          Add Step(2)
        </button>

        <h4>Technologies</h4>
        <ul>
          <li>{this.props.lang}</li>
          <li>Spring Framework</li>
          <li>JPA/Hibernate</li>
          <li>SQL</li>
        </ul>
      </div>
    );
  }
}

export default AboutClass;
