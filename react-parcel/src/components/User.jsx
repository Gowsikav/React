import React from "react";
import Admin from "./Admin";

class User extends React.Component {
  constructor() {
    super();
    console.log("constructor in user");
  }

  componentDidMount() {
    console.log("componentDidMount in user");
  }
  render() {
     console.log("user render method")
    return (
      <div>
        <h3>User Component</h3>
        <p>Name: X-workz ODC</p>
        <p>contact: hr@xworkz.in</p>
        <Admin/>
      </div>
    );
  }
}

export default User;
