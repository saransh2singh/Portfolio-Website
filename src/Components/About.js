import React from "react";
import "./About.css";

{
  function reveal() {
    var reveals = document.querySelectorAll(".about");

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

function About() {
  return (
    <div className="about">
      <div className="flex img-center">
        <div className="img-div">
          <img className="about--img" src="images/about.avif"></img>
        </div>
        <div className="text-align remove-pad">
          <h4 className="section">ABOUT ME</h4>
          <h3 className="mb">
            A dedicated Front-end Developer based in Bihar, India 📍
          </h3>
          <p className="summary">
            I am a final year undergraduate student at SRM Institute of Science
            & Technology, pursuing a B.Tech in Computer Science.Having developed
            a strong proficiency in various programming languages including C,
            C++, HTML, CSS, JavaScript, React, Bootstrap, and Python, I possess
            a solid foundation in Frontend development. Throughout my academic
            journey, I have gained hands-on experience designing and developing
            user-friendly websites emphasizing frontend development. I am also
            proficient in using video editing software to create engaging
            multimedia content.
          </p>
        </div>
      </div>
      <div id="projects"></div>
    </div>
  );
}

export default About;
