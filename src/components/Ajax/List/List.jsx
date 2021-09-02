import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './List.css';

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    };

    componentDidMount() {
        this.token = PubSub.subscribe('github', (_, stateObj) => {
            this.setState(stateObj);
        })
    };

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state;

        return (
			<div className="row">
				{
					isFirst ? <h2>Welcome</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
        )
    };
}
