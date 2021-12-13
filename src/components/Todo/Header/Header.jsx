import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { keyCode, target } = event;

    if (keyCode !== 13) return;

    if (target.value.trim() === '') {
      return;
    }

    this.props.addTodo({ id: nanoid(), name: target.value, done: false });
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Type in your todo, and Enter"
        ></input>
      </div>
    );
  }
}
