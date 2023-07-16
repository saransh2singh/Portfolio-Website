import React from "react";
import "./Contact.css";

{
  function reveal() {
    var reveals = document.querySelectorAll(".contact");

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

function Contact() {
  return (
    <div className="contact" id="contact">
      <h4 className="section--contact">CONTACT</h4>
      <h3>Don't be shy! Hit me up! 👇</h3>
      <div className="flexx bottom flx-dir pd">
        <div className="flexx flx-dir">
          <a
            target="_blank"
            className="link links "
            href="https://www.google.com/maps/place/Patna,+Bihar/@25.6082547,84.9782263,11z/data=!3m1!4b1!4m6!3m5!1s0x39f29937c52d4f05:0x831a0e05f607b270!8m2!3d25.5940947!4d85.1375645!16zL20vMDI3d3Zi?entry=ttu"
          >
            <i
              id="map-marker"
              class="fa fa-map-marker"
              aria-hidden="true"
              style={{
                fontSize: "2em",
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(0,0,0,.1)",
                padding: "20px 29px",
                color: "darkcyan",
              }}
            ></i>
            <div className="lefttt">
              <h4>Location</h4>
              <p>Bihar,India</p>
            </div>
          </a>
        </div>
        <div className="flexx rightt flx-dir">
          <a className="link links " href="mailto:saransh2singh@gmail.com">
            <i
              class="fa fa-envelope"
              aria-hidden="true"
              style={{
                fontSize: "2em",
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(0,0,0,.1)",
                padding: "21px 24px",
                color: "darkcyan",
              }}
            ></i>
            <div className="lefttt">
              <h4>Mail</h4>
              <p>saransh2singh@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
