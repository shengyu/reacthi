import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RkNavLink from '../RkNavLink';
import News from './News/News';
import Message from './Message/Message';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <RkNavLink to="/home/news">News</RkNavLink>
                        </li>
                        <li>
                            <RkNavLink to="/home/message">Message</RkNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to="/home/news"/>
                    </Switch>  
                </div>
            </div> 
        )
    }
}
