import React, { Component } from 'react';

const DetailData = [
  { id: '01', content: 'Hello 001' },
  { id: '02', content: 'Hello 002' },
  { id: '03', content: 'Hello 003' },
];
export default class Detail extends Component {
  render() {
    const { id, title } = this.props.location.state;
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}
