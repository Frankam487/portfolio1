
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Offres from "./components/Offres";
import Parcours from "./components/Parcours";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Mind from "./components/Mind";
import Formm from "./components/Formm";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <div className="app">


        <Header />
        <Home />
        <AboutMe />
        <Expertise />
        <Parcours />
        <Offres />
        <Portfolio />
        <Mind />
        <Clients />
        <Blog />
        <Formm />
        <Footer />


      </div>
    </>
  );
};
export default App;
