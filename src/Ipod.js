import React, { Component } from "react";
import "./index.css";
class Ipod extends Component {
  render() {
    return (
      <div id="ipodContainer">
        <div id="btnsContainer">
          <div id="wheel">
          <div id="btns">
              <span id="menuBtn" className="actionBtn">
                MENU
              </span>
              <span id="forwardBtn" className="actionBtn">
                <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png"></img>
              </span>
              <span id="playPauseBtn" className="actionBtn">
                <img src="https://cdn-icons-png.flaticon.com/512/7109/7109152.png" />
              </span>
              <span id="backwardBtn" className="actionBtn">
                <img src="https://cdn-icons-png.flaticon.com/512/4029/4029036.png"></img>
              </span>
            </div>
            <div id="innerWheel"></div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  ipodContainer: {
    width: "100px",
    backgroundColor: "red",
    diplay: "flex",
  },
  wheel: {
    height: "50px",
    width: "50px",
    borderRadius: "50px",
    backgroundColor: "grey",
  },
};
export default Ipod;
