import Card from "../Components/Card";
import { context } from "../Components/utils/global.context";

const Home = () => {
  const { pageState } = context();
  const dentistas = pageState.dentistas;

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
          <Card
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
            email={dentista.email}
            key={dentista.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
