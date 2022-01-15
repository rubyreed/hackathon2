import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { RecipeContext } from "../providers/RecipeProvider";
import DropdownChecklist from '../components/DropdownChecklist'
import RecipeCard from './RecipeCard'
import axios from 'axios'
const FindRecipes = () => {
    const auth = useContext(AuthContext);
    const recipes = useContext(RecipeContext);
    const [healthLabels, setHealthLabels] = useState([])
    const [cuisineTypes, setCuisineTypes] = useState([])
    const [searchText, setSearchText] = useState("")
    const [recipe, setRecipe] = useState("") 
    useEffect(()=>{
       
    }, [])


    const handleSubmit = () => {
        recipes.setFilters({
            healthLabels: healthLabels, cuisineTypes: cuisineTypes, searchText: searchText
        })
    }

    const addRecipe = async () => {
        console.log("recipe: " + recipes.selRecipe)
        await axios.post(`/api/recipes`, recipes.selRecipe)
        recipes.randomRecipe()
    }

    return (
        <div>
        <h1>Find a Recipe</h1> <br/>
        {/* <DropdownChecklist items={recipes.healthLabels} setState={setHealthLabels} tag="Health Labels"/>
        <DropdownChecklist items={recipes.cuisineTypes} setState={setCuisineTypes} tag="Cuisine Types"/> <br/> */}
        <input onChange={(e)=>{setSearchText(e.target.value)}}style={{marginLeft: "8px", width: "300px", fontSize: "12pt"}}placeholder="Search keywords"></input>
        <button onClick={handleSubmit}>Filter Recipes</button>
        {recipes.selRecipe && <RecipeCard recipe={recipes.selRecipe} handleAdd={addRecipe} handleNext={()=>{recipes.randomRecipe()}}/>}
        
        </div>
        
    );
};

export default FindRecipes;
