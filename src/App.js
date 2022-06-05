import "./App.css";
import AboutUs from "./components/AboutUs";
import AboutUs2 from "./components/AboutUs2";
import Corporate from "./components/Corporate";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Groups from "./components/Groups";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Vission from "./components/Vission";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutUs />
      <AboutUs2 />
      <Vission />
      <Mission />
      <Corporate/>
      <Founder/>
      <Groups/>
      <Footer/>
    </div>
  );
}

export default App;
