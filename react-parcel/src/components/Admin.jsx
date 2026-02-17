import React from "react";
import Guest from "./Guest";

class Admin extends React.Component {
  constructor() {
    super();
    console.log("constructor in Admin");
  }

  componentDidMount() {
    console.log("componentDidMount in Admin");
  }

  render() {
    console.log("Admin render method");
    return (
      <div>
        <h3>Admin Component</h3>
        <p>Name: Admin Team</p>
        <p>Contact: admin@xworkz.in</p>
        <Guest />
      </div>
    );
  }
}

export default Admin;
