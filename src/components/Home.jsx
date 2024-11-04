  import { TypeAnimation } from "react-type-animation";
  import Icons from "./Icons";
  import { useEffect } from "react";

  export const Home = () => {
    
    // useEffect(() => {
    //   let movee = document.querySelector(".movee");
      
      
    //   window.addEventListener('mousemove', (e) => {
    //     movee.style.left = e.pageX + "px";
    //     movee.style.top = e.pageY + "px";

    //   }, [])
    // }, [])
    return (
      <>
        <Icons />
        <div className="content " id='acceuil'>
      <div className="movee"></div>
          <div className="home text-center">
            <div className="name-content mx-36">
              <h4 className="text-1xl text-cyan-500 font-bold my-2">
                Salut, je suis
              </h4>
              <h1 className="text-3xl font-extrabold text-blue-950 flex-1">
                Frank Kamgang
              </h1>
              <h5 >
                <span >
                  <TypeAnimation className="text-cyan-200"
                    sequence={[
                      "Hey!!!",
                      1000,
                      "Bienvenue dans mon portfolio",
                      1000,
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                  />

                </span>
              </h5>
            </div>
            <p className="my-8 font-bold text-center">
              Passionné par le développement d'interface utilisateur,
              <br /> <i>Developper des choses jolies me passionne beaucoup...</i>
            </p>
            <div className="btns-container mx-auto flex my-10 items-center justify-center">
              <button className="tel  flex transform hover:scale-110 hover:-translate-x-1 transition-transform duration-300justify-center items-center mx-[7px] p-[14px_32px] border-2 border-sky-500 rounded-[30px] cursor-pointer duration-400 ease text-1xl">
                Télécharger CV
              </button>
              <button className="contact bg-sky-250 flex justify-center items-center p-[14px_32px] border-2 border-sky-500 rounded-[30px] cursor-pointer duration-400 ease transform hover:scale-110 hover:-translate-x-1 transition-transform duration-300">
                Me contacter
              </button>
            </div>
          </div>
          <div className="image 1005:bg-reg-400">
            <img
              src="../../../public/images.jpeg"
              alt=""
              className="text-center mx-auto  hidden  rounded-md drop-shadow-sm w-[400px]"
            />
          </div>
        </div>
      </>
    );
  };
