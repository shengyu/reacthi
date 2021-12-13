import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;

    PubSub.publish('github', { isFirst: false, isLoading: true });

    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      console.log(data);
      PubSub.publish('github', { isLoading: false, users: data.items });
    } catch (error) {
      console.log('Request failed', error);
      PubSub.publish('github', { isLoading: false, err: error.message });
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search GitHub User</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="avator"
          />
          &nbsp;
          <button onClick={this.search}>search</button>
        </div>
      </section>
    );
  }
}
