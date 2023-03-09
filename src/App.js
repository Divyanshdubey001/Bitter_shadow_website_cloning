import NavBar from "../src/components/NavBar";
import LatestContent from "../src/components/LatestContent";
import Footer from "../src/components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <LatestContent />
      <Footer />
    </div>
  );
}

export default App;
