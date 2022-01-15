import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeProvider = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState([]);


    const getRecipes = async () => {
        var axios = require("axios").default;

            var options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: 'chicken'},
            headers: {
                'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
                'x-rapidapi-key': 'c94b98155cmshee8c09107c7ecb6p1571a2jsne93fdf1551d9'
            }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
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
        setFilters
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
