import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';
import './Todo.css';

export default class Todo extends Component {
  state = {
    todos: [
      { id: '001', name: 'Dinner', done: true },
      { id: '002', name: 'Sleep', done: true },
      { id: '003', name: 'Coding', done: false },
      { id: '004', name: 'Shopping', done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    this.setState({ todos: [todoObj, ...todos] });
  };

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodos = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({ todos: newTodos });
  };

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodos={this.checkAllTodos}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
