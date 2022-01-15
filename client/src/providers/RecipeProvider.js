import React, { useEffect, useState } from "react";
import axios from "axios";
export const RecipeContext = React.createContext();
const RecipeProvider = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({
      healthLabels: [],
      cuisineTypes: [],
      searchText: ""
  });
  
  const healthLabels = [
    'alcohol-free',
    'immuno-supportive',
    'crustacean-free',
    'dairy-free',
    'egg-free',
    'fish-free'
  ]

  const cuisineTypes = [
    'American',
    'Asian',
    'British',
    'Caribbean',
    'Central Europe',
    'Chinese'
  ]

  useEffect(()=>{
      console.log("filters: " + filters.healthLabels, filters.cuisineTypes)
      getRecipes()
  }, [filters])


    const getRecipes = async () => {
        var axios = require("axios").default;
            var options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {
                q: filters.searchText,
                from: 1,
                to: 100
            },
            headers: {
                'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
                'x-rapidapi-key': 'c94b98155cmshee8c09107c7ecb6p1571a2jsne93fdf1551d9'
            }
            };

            await axios.request(options).then(function (response) {
                let apiRecipes = response.data.hits
                let filteredRecipes = apiRecipes.filter((r)=>{
                    let hasCuisineType = true
                    let hasHealthLabels = true
                    // if (filters.cuisineTypes.length>0){
                    //     hasCuisineType = filters.cuisineTypes.some((ct)=>{return r.recipe.cuisineType[0] === ct})
                    // } 
                    // if (filters.healthLabels.length>0){
                    //     hasHealthLabels = filters.healthLabels.every((hl)=>{return r.recipe.healthLabels.includes(hl)})
                    // }
                    // console.log(hasCuisineType, hasHealthLabels)
                    return hasCuisineType && hasHealthLabels
                })
                console.log(apiRecipes);
                setRecipes(filteredRecipes.map((r)=>{
                    return {
                        name: r.recipe.label,
                        ingredients: r.recipe.ingredientLines,
                        image: r.recipe.image,
                        instruction: r.recipe.shareAs
                    }
                }))
            }).catch(function (error) {
                console.error(error);
            });
    }
  return (
    <RecipeContext.Provider
      value={{
        getRecipes,
        recipes,
        filters,
        setFilters,
        healthLabels,
        cuisineTypes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
