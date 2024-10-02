import React, { useEffect, useState } from "react";
import "./home.css";
import { Header } from "./Header";
import { Button } from "../../components/button/Button";
import logo from "/logo.png";
import { Filter } from "./Filter";
import useGet from "../../hooks/useGet";

export const Home = () => {
  const { data: randomData, loading: randomLoading, error: randomError, executeGet: getRandom } = useGet(`/random`);

  const [filter, setFilter] = useState(null);

  const {
    data: filterData,
    loading: filterLoading,
    error: filterError,
    executeGet: getFiltered,
  } = useGet(`/filter?type=${filter}`);

  const handleSearch = () => {
    if (filter) {
      getFiltered();
    } else {
      getRandom();
    }
  };

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <section className="sectionSearch">
          <Filter value={filter} onChange={setFilter} />
          <img src={logo} className="logo" />
          <div className="wrapper">
            <div className="textSearch"> TROBA ALGUNA COSA A FER</div>
            <Button onClick={handleSearch}>Generar</Button>
          </div>
        </section>
        <section className="sectionActivity">
          <div className="activitat">Activitat:</div>
          {randomLoading || filterLoading ? (
            <div className="randomActivity">Cargando...</div>
          ) : randomError || filterError ? (
            <div className="randomActivity">Error al cargar los datos: {randomError || filterError}</div>
          ) : (
            <div className="randomActivity">{filter ? filterData?.[0].activity : randomData?.activity}</div>
          )}
        </section>
      </div>
    </>
  );
};
