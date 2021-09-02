import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
    search = () => {
        const { keyWordElement: { value: keyword } } = this;
        
        PubSub.publish('github', { isFirst: false, isLoading: true });
        
        axios.get(`/api1/search/users2?q=${keyword}`).then(
            response => {
                PubSub.publish('github', { isLoading: false, users: response.data.items });
            },
            error => {
                PubSub.publish('github', { isLoading: false, err: error.message });
            }
        );
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search GitHub User</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="avator" />&nbsp;
                    <button onClick={this.search}>search</button>
                </div>
            </section>
        )
    }
}
