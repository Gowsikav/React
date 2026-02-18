import React from "react";
import Admin from "./Admin";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: null,
      loading: true,
      todoId: 1
    };
  }

  componentDidMount() {
    console.log("componentDidMount call in User")
    this.fetchTodo();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called in user");
    if (prevState.todoId !== this.state.todoId) {
      this.fetchTodo();
    }
  }

  componentWillUnmount(){
    console.log("componentDidWillUnmount call in user")
  }

  fetchTodo = () => {
    this.setState({ loading: true });

    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          todo: data,
          loading: false
        });
      });
  };

  changeTodo = () => {
    this.setState({
      todoId: this.state.todoId + 1
    });
  };

  render() {
    const { todo, loading } = this.state;

    return (
      <div>
        <h3>User Component</h3>

        <button onClick={this.changeTodo}>
          Change Todo
        </button>

        {loading ? (
          <p>Loading...</p>
        ) : (
          todo && (
            <div>
              <p>Title: {todo.title}</p>
              <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
            </div>
          )
        )}

        <Admin />
      </div>
    );
  }
}

export default User;
