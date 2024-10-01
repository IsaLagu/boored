import "./home.css";
import { Header } from "./Header";
import { Button } from "../../components/button/Button";
import logo from "../../../public/logo.png";
import { Filter } from "./Filter";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
        <section>
          <img src={logo} className="logo" />
          <div className="wrapper">
            <div className="textSearch"> TROBA ALGUNA COSA A FER</div>
            <Button>Generar</Button>
          </div>
        </section>
        <section>
          <div className="activitat">Activitat:</div>
          <div className="randomActivity">Tag a friend you haven't talked to in a long time</div>
        </section>
      </div>
    </>
  );
};
