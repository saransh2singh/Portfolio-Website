import React from "react";
import "./Projects.css";
import Cards from "./Cards";

function Projects() {
  return (
    <div className="spacing">
      <h4 className="project">PROJECTS</h4>
      <h3 className="project--head">
        Each project is a unique piece of development 🧩
        <div id="netflix"></div>
      </h3>

      <Cards
        title="Netflix Clone"
        content="Developed a dynamic Netflix clone using React. The website's content dynamically changes upon each load, providing users with a unique experience every time."
        github="https://github.com/saransh2singh/Netflix--clone"
        website="https://64ac755a63b2e31083200e93--gorgeous-kringle-8e5c70.netlify.app/"
        img="images/Netflix.png"
        stack="React"
      />

      <Cards
        title="Grocery Store"
        content="Created and designed the User Interface of a grocery store which can be used by users to purchase groceries online.Made use of Html, CSS, and JavaScript to design the UI of the grocery store."
        github="https://github.com/saransh2singh/Grocery-Store"
        website="https://saransh2singh.github.io/Grocery-Store/"
        img="images/grocery.png"
        id="grocery"
        stack="HTML,CSS"
      />

      <Cards
        title="Meme Generator"
        content="Created and designed a web-based platform using ReactJS that allows users to create funny memes. "
        github="https://github.com/saransh2singh/Meme-Generator"
        website="https://6460baebfe8634712ad4fe3a--lucky-bunny-80caf3.netlify.app/"
        img="images/meme.png"
        id="meme"
        stack="React"
      />

      <Cards
        title="Weather Scraper"
        content="Designed and implemented a user-friendly interface using PHP, allowing users to easily navigate and access weather data for their desired locations with a beautiful and responsive UI. "
        github="https://github.com/saransh2singh/Weather-Scraper-"
        website="https://overprotective-gard.000webhostapp.com/"
        img="images/weather.png"
        id="weather"
        stack="PHP"
      />
    </div>
  );
}

export default Projects;
