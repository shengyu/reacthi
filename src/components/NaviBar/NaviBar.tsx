import React, { Component } from "react";
import "./NaviBar.css";

export default class NaviBar extends Component {
  render() {
    return (
      <div>
        <div className="box1"></div>
        <div className="wrapper1">
          <div className="box2"></div>
          <div className="content">
              <div className="import-repo"></div>
          </div>
        </div>
      </div>
    );
  }
}
