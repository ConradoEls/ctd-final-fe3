import { useEffect } from "react";
import { context } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { pageState, pageDispatch } = context();
  const { id } = useParams();
  const URL = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(URL).then((res) => {
      pageDispatch({ type: "GET_USER", payload: res.data });
    });
  }, []);

  const dentista = pageState.dentista;

  return (
    <>
      <h1>{dentista.name}</h1>
      <div className="info">
        <p>Email: {dentista.email}</p>
        <p>Phone: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>
      </div>
    </>
  );
};

export default Detail;
