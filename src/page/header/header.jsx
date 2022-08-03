import "./header.scss";
import logo from "../../img/logpo.png";
import useStart from "../../hooks/useStart";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { kurslar, setKurslar } = useStart();

  let activ = () => {
     console.log();
  }



  return (
    <header className="header">
      <div className="nav">
        <Link className="nav_link" to="/">
          <img className="nav_img" src={logo} alt="company_logo" />
        </Link>
        <ul className="nav_list">
          <li onClick={activ}  className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/nmadurlc">

            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-journal-code"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </div>
            <select defaultValue={kurslar} className="nav_select">
              <option disabled value={"Kurslar"}>
                Kurslar
              </option>
              <option value={"IT"}>Web Dasturlash</option>
              <option value={"Arab tili"}>Arab Tili</option>
              <option value={"Rus tili"}>Rus Tili </option>
              <option value={"Rus tili"}>Inglis Tili</option>
            </select>
          </NavLink>
          </li>
          <li onClick={activ} className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/nmadurdsd">
            
            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  filRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <p className="nav_select">Admin</p>
          </NavLink>
          </li>
          <li onClick={activ} className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/nmdur">

            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <p className="nav_select">Manzil</p>
          </NavLink>
          </li>
          <li onClick={activ} className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/madur">

            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-film"
                viewBox="0 0 16 16"
              >
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
              </svg>
            </div>
            <p className="nav_select">Dars jarayoni</p>
          </NavLink>
          </li>
          <li onClick={activ} className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/nmaur">

            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
            <p className="nav_select">Ro'yxatdan o'tish</p>
          </NavLink>
          </li>
          <li onClick={activ} className="nav_item">
          <NavLink className={'active' ? 'nav_item_active nav_item' : 'nav_item'} to="/nmadurla">

            <div className="nav_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-bookmark-check"
                viewBox="0 0 16 16"
              >
                <path
                  filRule="evenodd"
                  d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </div>
            <p className="nav_select">Academy Haqida</p>
          </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
