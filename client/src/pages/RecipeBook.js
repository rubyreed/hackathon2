import React from "react";
import { Grid, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeBookCard from "../components/RecipeBookCard";

const RecipeBook = () => {
  const [recipes, setRecipes] = useState(null)
  const [ingredients, setIngredients] = useState("")

  const handleChange = (event) => {
    setIngredients(event.target.value);
  };

  useEffect(() => {
    getRecipeBooks();
  }, [])

  const getRecipeBooks = async () => {
    try {
      let res = await axios.get('/api/recipes')
      setRecipes(res.data)
    } catch (err) {
      alert('error in getRecipeBooks')
    }
  }

  const renderSelect = () => {
    if (!recipes) {
      return (
        <div>
          Go add some recipes to your Recipe Book!
          {/* <a href = /> */}
        </div>
      )
    } else {
      return (
        <Select></Select>
      )
    }
  }

  const renderRecipe = () => {
    if (!recipes) {
      return <p>Loading recipes</p>
    }
    return (
      <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {recipes.map((r) => {
            return(
            <Grid item xs={2} sm={4} md={4} key={r.id}>
              <RecipeBookCard {...r}/>
            </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }

  return (
    <div>
      <h1>My Recipe Book</h1>
      {/* {JSON.stringify(recipes)} */}
      {renderRecipe()}
    </div>
  )
}

export default RecipeBook;