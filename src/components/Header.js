import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Movies </h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Movie List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add a movie
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
