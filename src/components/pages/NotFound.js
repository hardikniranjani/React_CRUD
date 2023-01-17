import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found d-flex flex-column">
      <h1 className="display-1">Page Not Found</h1>
      <h3 className="display-">
        <NavLink exact to="/">
          Go to Home Page
        </NavLink>
      </h3>
    </div>
  );
};

export default NotFound;
