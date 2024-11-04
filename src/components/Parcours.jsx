const Parcours = () => {
  return (
    <div className="parcours">
      <div className="text">
        <h4>Mes Qualifications</h4>
        <h1>Agreable Parcours</h1>
      </div>
      <div className="education-container">
        <div className="education">
          <div className="icon">
            <span className="fas fa-user-graduate"></span> <h2>Education</h2>
          </div>
          <div className="education-master item">
            <h3>Obtention du premier diplome</h3>
            <p>School Time</p>
            <span className="fas fa-calendar"><i>2015 - 2016</i></span>
          </div>
          <div className="education-honours item">
            <h3>Obtention du second diplome</h3>
            <p>School Time</p>
            <span className="fas fa-calendar"><i>2018 - 2019</i></span>
          </div>
          <div className="education-school item">
            <h3>Obtention du troisième diplome  </h3>
            <p>School Time</p>
            <span className="fas fa-calendar"><i>2020 - 2021</i></span>
          </div>
        </div>

        <div className="experience">
          <div className="icon">
            <span className="fas fa-school"></span> <h2>Expérience</h2>
          </div>
          <div className="experience-envato exp" >
            <h3>Commerce (vente d'habits)</h3>
            <p>Commerce</p>
            <span className="fas fa-calendar"><i>2022 - 2023</i></span>
          </div>
          <div className="experience-global exp">
            <h3>Commerce (vente d'habits)</h3>
            <p>Commerce</p>
            <span className="fas fa-calendar"><i>2022 - 2023</i></span>
          </div>
          <div className="experience-instructory exp">
            <h3>Ecole suppérieur la canadienne</h3>
            <p>Spéciaization</p>
            <span className="fas fa-calendar"><i>2024 - 2025</i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcours;
