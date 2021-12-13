import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Detail from './Detail/Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', tile: 'Message-001' },
      { id: '02', tile: 'Message-002' },
      { id: '03', tile: 'Message-003' },
    ],
  };
  render() {
    const { messageArr } = this.state;

    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.tile}</Link>&nbsp;&nbsp; */}
                <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.tile}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
