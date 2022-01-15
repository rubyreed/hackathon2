import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../providers/RecipeProvider";

const RecipeCard = (props) => {
  const recipes = useContext(RecipeContext);
    
  return (
    <div>
        <h2>{props.recipe.name}</h2>
        <img src={props.recipe.image}/> <br/>
        <button>View Recipe</button>
        <button onClick={props.handleAdd}>Add to Recipe Book</button>
        <button onClick={props.handleNext}>Next Recipe</button>
        <h5>Ingredients:</h5>
        {props.recipe.ingredients.map((i)=>{
            return (<p>{i}</p>)
        })}
        
    </div>
  );
};

export default RecipeCard;
