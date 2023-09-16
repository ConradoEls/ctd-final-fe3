import Card from "../Components/Card";
import { context } from "../Components/utils/global.context";

const Favs = () => {
  const { pageState } = context();
  const favs = pageState.favs;
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentista) => (
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

export default Favs;
