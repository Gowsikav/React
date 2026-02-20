import React from "react";

class Admin extends React.Component {
  constructor() {
    super();
    console.log("constructor in Guest");
  }

  componentDidMount() {
    console.log("componentDidMount in Guest");
  }

  componentWillUnmount(){
    console.log("componentDidWillUnmount call in Guest")
  }

  render() {
    console.log("Guest render method");
    return (
      <div>
        <h3>Guest Component</h3>
        <p>Name: Guest1</p>
        <p>Contact: guest@gmail.com</p>
      </div>
    );
  }
}

export default Admin;
