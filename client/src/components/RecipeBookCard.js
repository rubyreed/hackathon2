import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RecipeBookCard = (props) => {
  const recipe = props

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="Recipe"
        height="250"
        image={recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {recipe.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" >Add Ingredients to Grocery List</Button>
        <Button size="small" variant="outlined" >View Recipe</Button>
      </CardActions>
      <CardContent>
        <CardActions>
          <Button siez="small" variant="contained" color="error" sx={{ mx: "auto" }}>Delete Recipe</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default RecipeBookCard;