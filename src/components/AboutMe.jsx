const AboutMe = () => {

  return (
    <div className="aboutMe">
      <div className="image"></div>
      <div className="intro">
        <div className="intro-container">
          <div className="text">
            <h2>Mon Intro</h2>
            <h1>A propos de moi</h1>
          </div>
          <p>
            Le développement web en général m'a toujours attiré, bien qu'il soit divisé en plusieurs branche, le développement d'interface utilisateur me plait beaucoup, raison pour laquelle je me suis spécialié dans le développement Front-End...
          </p>
        </div>
        <div className="contact-container">
          <div className="contact">
            <div className="name">
              <span className="fas fa-user"></span> <h5>Name</h5>
              <b>:</b>
              <p>Frank Kamgang</p>
            </div>
            <div className="phone">
              <span className="fas fa-phone"></span> <h5>Phone</h5>
              <b>:</b>
              <p>690-461-830</p>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span> <h5>Email</h5>
              <b>:</b>
              <p>fkamgang06@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="interests">
          <h2 style={{ marginLeft: "12px" }}>Mon passe temps</h2>
          <div className="icon-container">
            <h3>
              <span className="fas fa-music"></span> <i>Music</i>
            </h3>
            <h3>
              <span className="fas fa-plane"></span>
              <i>Voyage</i>
            </h3>
            <h3>
              <span className="fas fa-photo"></span> <i>Photo</i>
            </h3>
            <h3>
              <span className="fas fa-film"></span>
              <i>Movies</i>
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
