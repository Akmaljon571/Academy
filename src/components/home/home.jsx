import chiziq from "../../img/Group51.png";
import xolida_opa from "../../img/xolida_opa.webp";
import qunduz_opa from "../../img/qunduz_opa.webp";
import Husnida_opa from "../../img/Husnida_opa.webp";
import sevinch from "../../img/sevinch.webp";
import Abduvohid from "../../img/Abduvohid.webp";
import Zarina from "../../img/Zarina.webp";
import "./home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home_h1">Bizning Ustozlar</h1>
      <ul className="home_list">
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={xolida_opa} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={qunduz_opa} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={Husnida_opa} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={sevinch} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={Abduvohid} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
        <li className="home_item">
          <Link to={"/single"} className="home_item">
            <img src={chiziq} alt="rasm" />
            <img className="ustoz" width={220} height={251} src={Zarina} alt="Ustoz" />
            <img src={chiziq} alt="rasm" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
