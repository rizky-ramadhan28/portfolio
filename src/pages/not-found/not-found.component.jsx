import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="row">
    <div className="col-12 text-center">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>

      <p>Sorry, an error has occured, Requested page not found!</p>

      <Link to="/" className="btn btn-info">
        Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
