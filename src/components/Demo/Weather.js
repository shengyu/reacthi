import React from 'react';

class Weather extends React.Component {
  state = { isHot: false, isWindy: true };

  changeWeather = () => {
    console.log('title clicked');
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  };

  render() {
    const { isHot } = this.state;
    return (
      <h1 onClick={this.changeWeather}>So {isHot ? 'hot' : 'cold'} today</h1>
    );
  }
}

export default Weather;
