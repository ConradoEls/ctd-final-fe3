import { Link } from "react-router-dom";
import { context } from "./utils/global.context";
import axios from "axios";
import { FaHeart } from "react-icons/fa/index.esm";
import "../styles/card.css";

const Card = ({ name, username, id }) => {
  const { pageState, pageDispatch } = context();
  const URL = "https://jsonplaceholder.typicode.com/users/" + id;

  const addFav = () => {
    axios(URL).then((res) => {
      pageDispatch({ type: "FAV", payload: res.data });
    });
  };

  const isFav = () => {
    return pageState.favs.some((fav) => fav.id === id);
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="doctor" />
      <Link to={`/dentista/` + id}>
        <h3>{name}</h3>
        <h4>{username}</h4>
      </Link>
      <button
        onClick={addFav}
        className={`favButton ${isFav() ? "favButton--active" : ""}`}
      >
        <FaHeart className={`favIcon ${isFav() ? "favIcon--active" : ""}`} />
      </button>
    </div>
  );
};

export default Card;
