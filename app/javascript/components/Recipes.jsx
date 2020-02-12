import React from "react";
import { Link } from "react-router-dom";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: { ingredients: "" }
    };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }


  componentDidMount() {
    const url = "/api/v1/recipes/index";
    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("network response went wrong");
    })
    .then(response => this.setState({ recipes: response }))
    .catch(() => this.props.history.push("/"));
  }
  
  render() {
    const { recipes } = this.state;
    const allRecipes = recipes.map((recipe, index) => {
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img 
            src={recipe.image}
            className="card-img-top"
            alt={`${recipe.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    });
    const noRecipe = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No recipes found. Let's <Link to="/new_recipe">add a recipe</Link>
        </h4>
      </div>
    );
  
  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes </h1>
          <p className="lead text-center">
            Yummy ONeil Recipes always have something that will tempt your appetite. 
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/recipe" className="btn custom-button">
              Add Recipe
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
      </>
    );
  }
}

export default Recipes; 
