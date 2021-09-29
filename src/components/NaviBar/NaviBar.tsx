import React, { Component } from "react";
import "./NaviBar.css";

export default class NaviBar extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="search-box"></div>
          <div className="avatar"></div>
        </div>
        <div className="wrapper1">
          <div className="sidebar"></div>
          <div className="content">
            <div className="import-repo-1">1</div>
            <div className="import-repo-2">2</div>
            <div className="import-repo-3">3</div>
            <div className="import-repo-3">4</div>
          </div>
        </div>
      </div>
    );
  }
}
