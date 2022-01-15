import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecipeModal from '../pages/RecipeModal';
import { Modal } from '@mui/material';
import axios from 'axios';

const RecipeBookCard = (props) => {
  const { deleteRecipe, image, name, id, instructions } = props
  const [ingredients, setIngredients] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getRecipeIngredients();
  }, [])

  const getRecipeIngredients = async () => {
    try {
      let res = await axios.get(`/api/recipes/${id}/ingredients`)
      setIngredients(res.data)
    } catch (err) {
      alert('error in getRecipeIngredients')
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          alt="Recipe"
          height="250"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='button-24' size="small" variant="contained" >Add Ingredients to Grocery List</Button>
          <Button className='button-24' onClick={handleOpen} size="small" variant="outlined" >View Recipe</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <RecipeModal name={name} instructions={instructions} ingredients={ingredients} />
          </Modal>
        </CardActions>
        <CardContent>
          <CardActions>
            <Button
            className='button-24'
              size="small"
              variant="contained"
              color="error"
              sx={{ mx: "auto" }}
              onClick={() => deleteRecipe(id)}
            >
              Delete Recipe</Button>
          </CardActions>
        </CardContent>
      </Card>
      {JSON.stringify(ingredients)}
    </>
  );
}

export default RecipeBookCard;