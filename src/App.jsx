import { context } from "./Components/utils/global.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  const { pageState } = context();
  const appClassName = () => {
    if (pageState.theme) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  return (
    <Router>
      <div className={`app ${appClassName()}`}>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/home" element={<Home />} />
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
