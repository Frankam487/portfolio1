const Header = () => {
  
  return (
    <div className="header">
      <div className="logo">
        <h1>
          H<span>.</span>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#acceuil">Acceuil</a>
        </li>
        <li>
          <a href="#contact">Infos</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#tes">Testimonial</a>
        </li>
        <li>
          <a href="#formm">Blog</a>
        </li>
        
      </ul>
     <div className="burgerr">
      <div className="li"></div>
        <div className="li"></div>
        <div className="li"></div>
     </div>
    </div>
  );
};
export default Header;
