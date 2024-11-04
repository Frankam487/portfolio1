import { useState } from "react";
import CardProjects from "./CardProjects";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "../../public/images.jpeg",
      name: "Web Design"
    },
    {
      id: 2,
      image: "../../public/3.jpeg",
      name: "Web Design"
    },
    {
      id: 3,
      image: "../../public/1.jpg",
      name: "Web Design"
    },
    {
      id: 4,
      image: "../../public/4.jpg",
      name: "Web Design"
    },
    
  ]);
  return (
    <div className="portfolio" id='portfolio'>
      <div className="text">
        <h2>Mon Portfolio</h2>
        <h1>Projets Recents</h1>
      </div>
      <div className="menu">
        <ul>
          <li>Projets</li>
          <li>Web Design</li>
          <li>App Mobile</li>
          <li>Design Graphic</li>
        </ul>
      </div>
      <div className="projects-container">
        
       
        {
          projects.map((project, index) => (
            <CardProjects project={project} key={index} />
          )
            
          )
      }

      </div>

    </div>
  );
}

export default Portfolio;