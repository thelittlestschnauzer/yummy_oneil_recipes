import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
    <div className="jumbotron-fluid jumbotron">
      <div className="container">
        <h1 className="display-4">Yummy O'Neil Recipes</h1>
        <p className="lead">
          Collection of the O'Neil's favorite recipes.
        </p>
        <hr className="my-4"/>
        <Link 
          to="/recipes"
          className="btn custom-button"
          role="button"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);