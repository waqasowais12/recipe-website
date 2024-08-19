import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <Card>
      <Card.Img variant="top" src={recipe.imageUrl || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Ingredients:</strong></ListGroup.Item>
        {recipe.ingredients.map((ingredient, index) => (
          <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default RecipePage;
