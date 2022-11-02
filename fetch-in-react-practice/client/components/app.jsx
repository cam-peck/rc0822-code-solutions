import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      res => res.json()
    ).then(
      data => this.setState({ todos: data })
    );
  }

  addTodo(newTodo) {
    fetch('api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(
      res => res.json()
    ).then(
      data => {
        const previousData = this.state.todos.slice();
        const updatedData = previousData.concat(data);
        this.setState({ todos: updatedData });
      }
    );
  }

  toggleCompleted(todoId) {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        const isCompletedStatus = this.state.todos[i].isCompleted;
        const flippedCompletedObj = {
          isCompleted: !isCompletedStatus
        };
        fetch(`api/todos/${todoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(flippedCompletedObj)
        }).then(
          res => res.json()
        ).then(
          data => {
            const previousData = this.state.todos.slice();
            previousData[i] = data;
            this.setState({ todos: previousData });
          }
        );
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
