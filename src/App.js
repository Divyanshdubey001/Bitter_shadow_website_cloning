import NavBar from "./Components/NavBar";
import LatestContent from "./Components/LatestContent"
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HeroSection />
      <LatestContent />
      <Footer />
    </div>
  );
}

export default App;
