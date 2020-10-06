import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  }


  // ===== TOGGLE COMPLETE =======
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
          todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // ====== Delete To Do =======
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }


  render() {
    return (
      <div className="App">
        <div className="container">
            <Header />
            <AddToDo />
            <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo = { this.delTodo }/>
        </div>
      </div>
    );
  }
}
 

export default App;
