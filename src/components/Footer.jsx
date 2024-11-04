import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-col items-center bg-blue-900 pt-12 pb-6">
        <span className="text-white text-3xl border-separate font-bold border  p-1">
          H.
        </span>
        <p className="text-center my-4 text-cyan-50">
          Pour plus d'informations, veuillez me contacter ou voir mes travaux via ces réseaux sociaux ...
        </p>
        <div className="flex justify-around ">
          <a
            href="https://www.facebook.com/Frankam.Shopping" target="_blank"
            className="fab fa-facebook m-3 bg-blue-400 p-2 text-1xl rounded-md hover:bg-blue-300 hover:translate-x-1 transition-all ease duration-[300ms]"
          ></a>
          <a
            href="https://github.com/Frankam487"
            className="m-3 hover:translate-x-1 fab fa-github bg-blue-400 p-2 text-1xl rounded-md hover:bg-blue-300 transition-all ease duration-[300ms]"
          ></a>
          <a
            href="https://www.linkedin.com/in/frank-kamgang/" target="_blank"
            className="fab  m-3 fa-linkedin bg-blue-400 p-2 text-1xl rounded-md hover:bg-blue-300 hover:translate-x-1 hover:scale-x-2 transition-all ease duration-[300ms]"
          ></a>
          <a
            href="https://t.me/Frankam4" target="_blank"
            className="fab fa-telegram m-3 hover:scale-1  bg-blue-400 p-2 text-1xl rounded-md hover:bg-blue-300 hover:translate-x-1 transition-all ease duration-[200ms]"
          ></a>
        </div>
        <div className="parag">

          <p className="mt-6 text-cyan-50 font-arial">2024 - &copy Tout droit réservé... </p>
          <h2><span>By</span>      Frank Kamgang</h2>
      
        </div>
      </div>
    </div>
  );
}

export default Footer;
