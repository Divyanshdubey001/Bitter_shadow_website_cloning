import NavBar from "../src/components/NavBar"
import LatestContent from "../src/components/LatestContent";
import Footer from "../src/components/Footer";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "../src/components/HamburgerMenu";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HamburgerMenu />
      <LatestContent />
      <Footer />
    </div>
  );
}

export default App;
