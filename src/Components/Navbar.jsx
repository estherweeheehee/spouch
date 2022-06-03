import {
    Link,
} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      
      <Link to="/">
      <h1 className="spouch">Spouch</h1>
      </Link>
        <div className="nav-right">
        <Link to="/about">
        About
      </Link>
      <Link to="/search">
        Search
      </Link>

      <Link to="/pouch">
        Pouch
      </Link>
      </div>

      
    </nav>
  );
};

export default Navbar;