import { useNavigate } from "react-router-dom";
import "../Header/Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header__title" onClick={() => navigate("/")}>
        Wordbook
      </h1>
      <div className="vl"></div>
    </header>
  );
}
export default Header;
