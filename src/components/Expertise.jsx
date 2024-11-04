const Expertise = () => {
  return (
    <div className="expertise">
      <div className="text">
        <h4>Pourquoi me choisir</h4>
        <h1>Mon Domaine Expertise</h1>
      </div>

      <div className="technicalBar">
        <div className="gauche">
          <div className="bar">
            <div className="info">
              <span>Facebook</span>
            </div>
            <div className="progress-line quatre">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Youtube</span>
            </div>
            <div className="progress-line cinq">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line un">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line deux">
              <span></span>
            </div>
          </div>
        </div>
        <div className="droite">
          <div className="bar">
            <div className="info">
              <span>SCSS</span>
            </div>
            <div className="progress-line quatre">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Tailwindcss</span>
            </div>
            <div className="progress-line cinq">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Javascript</span>
            </div>
            <div className="progress-line un">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>React_JS</span>
            </div>
            <div className="progress-line deux">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
