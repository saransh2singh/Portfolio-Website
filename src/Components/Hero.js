import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="heroo" id="home">
      <div className="flex col">
        <div className="hero--description">
          <h1 className="role">
            Front-End <br></br> Developer 👋🏻
          </h1>
          <p className="personal--info">
            Hi, I'm Saransh Singh. A passionate Front-end React Developer based
            in Bihar, India. 📍
          </p>
          <div className="btnss">
            <a
              href="https://www.linkedin.com/in/saransh-singh-b8b74519a/"
              target="_blank"
              className="socials"
            >
              <i
                class="fa fa-linkedin-square"
                style={{ fontSize: "34px", marginRight: "10px" }}
              ></i>
            </a>
            <a
              href="https://github.com/saransh2singh"
              target="_blank"
              className="socials"
            >
              <i class="fa fa-github-square" style={{ fontSize: "34px" }}></i>
            </a>
          </div>
        </div>
        <div className="hero--img"></div>
      </div>
      <div className="tech">
        <div>
          Tech Stack &nbsp;&nbsp; <span className="mr rotate">|</span>
        </div>
        <div className="imagess">
          <img className="stack" src="images/html.png"></img>
          <img className="stack" src="images/css.png"></img>
          <img className="stack" src="images/js.png"></img>
          <img className="stack" src="images/react.png"></img>
          <img className="stack" src="images/c.png"></img>
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}

export default Hero;
