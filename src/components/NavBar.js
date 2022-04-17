import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/top-movies">
          <li>Top Movies</li>
        </Link>

        <Link to="/popular-movies">
          <li>Popular Movies</li>
        </Link>

        <Link to="/search">
          <li>Search Movies</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
