import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  const defaultImage = 'https://via.placeholder.com/300x200.png?text=No+Image';
  const recipeImage = recipe.imageUrl ? recipe.imageUrl : defaultImage;
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={recipeImage} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.shortDescription}
        </Card.Text>
        <Link to={`/recipe/${recipe.id}`}>
          <Button variant="primary">View Recipe</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
