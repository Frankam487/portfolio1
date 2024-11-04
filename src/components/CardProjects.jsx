const CardProjects = ({ project }) => { 
  
    return (
      <div className="cardContent">
        <div className="card">
          <img src={project.image} alt={"image de " + project.name}/>
          <button className="btn1"><span className="fas fa-heart"></span></button>
          <button className="btn2"><span className="fas fa-hand"></span></button>
          <h3>Web Design</h3>
        </div>
      </div>
    );
  }

  export default CardProjects