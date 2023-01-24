import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  
    return (
      <div className="Menu">
        <Link className="link" to="home">
          Home
        </Link>
        <Link className="link" to="about">
          About
        </Link>
        <Link className="link" to="books">
          Books
        </Link>
      </div>
    );
}

export default Menu;
