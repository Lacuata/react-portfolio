import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "RevApp",
    image: projectOne,
    description: (
      <>
        <p>
          RevApp - s a reviewer application where users can paste sentences and
          get generated questions. Question types can be multiple-choice,
          open-ended, true/false, etc.
        </p>
      </>
    ),
    github: "https://github.com/Lacuata/Reviewer-app",
    demo: "https://www.youtube.com/watch?v=xPlK4IqdWTk&feature=youtu.be",
  },
  2: {
    title: "Weather App",
    image: projectTwo,
    description: (
      <>
        <p>
          WeatherApp - is a weather application where users can search the city
          to check the weather from it in our country or another’s country. Tech
          Skills I used: HTML, CSS, Javascript, ReactJs, Fetch API, and
          OpenWeatherMap API.{" "}
        </p>
      </>
    ),
    github: "https://github.com/Lacuata/weatherApp",
    demo: "https://lacuata.github.io/weatherApp/",
  },
  3: {
    title: "Recipe Finder",
    image: projectThree,
    description: (
      <>
        <p>
          Recipe Finder is a web application designed to help users discover
          delicious recipes based on specific ingredients or recipe names. With
          Recipe Finder, users can easily search for recipes by entering
          keywords or ingredients they have on hand.
        </p>
      </>
    ),
    github: "https://github.com/Lacuata/Recipe-finder",
    demo: "https://lacuata.github.io/Recipe-finder/",
  },
};

export default projects;
