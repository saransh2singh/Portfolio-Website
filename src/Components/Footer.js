import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="flexx foot">
      <div className="cent">
        <h3 className="copyright">
          Copyright © 2023 . All rights are reserved
        </h3>
      </div>
      <div className="m--left">
        <a
          href="https://www.linkedin.com/in/saransh-singh-b8b74519a/"
          target="_blank"
          className="socialss"
        >
          <i
            class="fa fa-linkedin-square"
            style={{ fontSize: "34px", paddingRight: "10px" }}
          ></i>
        </a>
        <a
          href="https://github.com/saransh2singh"
          target="_blank"
          className="socialss"
        >
          <i class="fa fa-github-square" style={{ fontSize: "34px" }}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
