import axios from "axios";
import { useEffect, useState } from "react";

const RecipeBook = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    getRecipeBooks()
  }, [])

  const getRecipeBooks = async () => {
    try{
      let res = await axios.get('/api/recipes')
      setRecipes(res.data)
    } catch(err){
      alert('error in getRecipeBooks')
    }
  }

  return (
    <div>
      <h1>My Recipe Book</h1>
      {JSON.stringify(recipes)}
    </div>
  )
}

export default RecipeBook;