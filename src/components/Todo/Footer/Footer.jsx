import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked);
    };

    handleClearAllDone = () => {
        this.props.clearAllDone();
    };

    render() {
        const { todos } = this.props;
        const finished = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={finished === total && total > 0 ? true : false} />
                </label>
                <span>
                    <span>Finished {finished}</span> / Total {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear finished todos</button>
            </div>
        )
    }
}
