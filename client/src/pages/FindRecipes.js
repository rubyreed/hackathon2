import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { RecipeContext } from "../providers/RecipeProvider";
import DropdownChecklist from '../components/DropdownChecklist'
const FindRecipes = () => {
    const auth = useContext(AuthContext);
    const recipes = useContext(RecipeContext);
    const [healthLabels, setHealthLabels] = useState([])
    const [cuisineTypes, setCuisineTypes] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        
    }, [healthLabels, cuisineTypes, searchText])


    const handleSubmit = () => {
        recipes.setFilters({
            healthLabels: healthLabels, cuisineTypes: cuisineTypes, searchText: searchText
        })
    }
    return (
        <div>
        <header>Home!</header> <br/>
        <DropdownChecklist items={recipes.healthLabels} setState={setHealthLabels} tag="Health Labels"/>
        <DropdownChecklist items={recipes.cuisineTypes} setState={setCuisineTypes} tag="Cuisine Types"/> <br/>
        <input onChange={(e)=>{setSearchText(e.target.value)}}style={{marginLeft: "8px", width: "300px", fontSize: "12pt"}}placeholder="Search keywords"></input>
        <button onClick={handleSubmit}>Filter Recipes</button>
        <p onClick={()=>{recipes.getRecipes()}}>Authenticated? {recipes.recipes && JSON.stringify(recipes.recipes)}</p>
        </div>
    );
};

export default FindRecipes;
