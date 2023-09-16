import { context } from "./utils/global.context";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const { pageState, pageDispatch } = context();

  const switchTheme = () => {
    pageDispatch({ type: "SWITCH_THEME" });
  };

  const theme = () => {
    if (pageState.theme) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  return (
    <nav className={`nav-${theme()}`}>
      <a href="/" className="title">
        <span style={{ color: "red" }}>D</span>H Odonto
      </a>
      <div className="menu">
        <ul>
          <Link to="/home" className="link">
            Home
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="/favs" className="link">
            Favs
          </Link>
        </ul>
      </div>

      <div className="toggle-button">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={switchTheme}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <span className={`ball ${theme()}`}></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
