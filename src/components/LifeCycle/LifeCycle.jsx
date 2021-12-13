import React from 'react';
import './LifeCycle.css';

class LifeCycle extends React.Component {
  state = {
    newsArr: [],
  };

  componentDidMount() {
    setInterval(() => {
      const { newsArr } = this.state;
      const news = 'News' + (newsArr.length + 1);
      this.setState({ newsArr: [news, ...newsArr] });
    }, 2000);
  }

  render() {
    return (
      <div className="list">
        {this.state.newsArr.map((n, index) => {
          return (
            <div className="news" key={index}>
              {n}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LifeCycle;
