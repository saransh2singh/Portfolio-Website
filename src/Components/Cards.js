import React from "react";
import "./Projects.css";

{
  function reveal() {
    var reveals = document.querySelectorAll(".card");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
}

function Cards(props) {
  return (
    <div className="flexx card shadow" id={`${props.id}`}>
      <div className="left">
        <img className="netflix shadow" src={`${props.img}`}></img>
      </div>
      <div className="right center">
        <h4 className="project--name">{props.title}</h4>
        <p className="content">{props.content}</p>
        <h4 className="techstack">{props.stack}</h4>
        {/* <span></span> */}
        <div className="flexx btns">
          <div className="flexx btns">
            <a
              target="_blank"
              href={`${props.github}`}
              className="code-links button1"
            >
              <div>Code</div>
              <div>
                <img className="img img1" src="images/github.svg"></img>
              </div>
            </a>
          </div>

          <div className="flexx mr btns ">
            <a
              target="_blank"
              href={`${props.website}`}
              className=" code-links button2"
            >
              <div>
                <p className="demo">Live Demo</p>
              </div>
              <div>
                <img className="img img2" src="images/arrow.png"></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
