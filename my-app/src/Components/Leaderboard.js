import React, { Component } from "react";
import img from "./img.gif";
import Footer from "./Footer";
import "../App.css";

class Leaderboard extends Component {
  state = {
    users: [
      {
        name: "Name1",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
      {
        name: "Name2",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
      {
        name: "Name3",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
      
    ],
  };
  render() {
    const img = `img src=" https://i.imgur.com/FmFAhXh.png"`;
    return (
      <div className="Leaderboard">
        <div>
          <ul>
            {this.state.users.map((user) => {
              return (
                <div className="liContainer">
                  <li style={{ listStyleType: "none" }}>
                    <img src={user.img} alt="userpicture" />
                    {user.name}
                    <div className="dotContainer">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Leaderboard;
