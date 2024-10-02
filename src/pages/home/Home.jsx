import "./home.css";
import { Header } from "./Header";
import { Button } from "../../components/button/Button";
import logo from "/logo.png";
import { Filter } from "./Filter";
import useGet from "../../hooks/useGet";

export const Home = () => {
  const { data, loading, error, executeGet } = useGet(`/random`, false);
  const handleSearch = () => {
    executeGet();
  };

  return (
    <>
      <Header />
      <div className="container">
        <section className="sectionSearch">
          <Filter />
          <img src={logo} className="logo" />
          <div className="wrapper">
            <div className="textSearch"> TROBA ALGUNA COSA A FER</div>
            <Button onClick={handleSearch}>Generar</Button>
          </div>
        </section>
        <section className="sectionActivity">
          <div className="activitat">Activitat:</div>
          {loading ? (
            <div className="randomActivity">Cargando...</div>
          ) : error ? (
            <div className="randomActivity">Error: {error}</div>
          ) : (
            <div className="randomActivity">{data?.activity}</div>
          )}
        </section>
      </div>
    </>
  );
};
