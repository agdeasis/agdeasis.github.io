import "./assests/scss/style.scss";
import About from "./components/About";
import Header from "./components/common/Header";
import Home from "./components/Home";
import PortFolio from "./components/PortFolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Tools />
      <PortFolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
