import { useEffect } from "react";

const Icons = () => {

   // useEffect(() => {
   //    const icon = document.querySelector(".icons");
   //    icon.style.transformTranslateY = -50 + "%";
   // }, []);
   return (
      <div className="icons">
         <a href="https://www.facebook.com/Frankam.Shopping" target="_blank" className="fab fa-facebook"></a>
         <a href="https://github.com/Frankam487" target="_blank" className="fab fa-github"></a>
         <a href="https://www.linkedin.com/in/frank-kamgang/" target="_blank" className="fab fa-linkedin"></a>
         <a href="https://t.me/Frankam4" target="_blank" className="fab fa-telegram"></a>
      </div>
   );
}

export default Icons;