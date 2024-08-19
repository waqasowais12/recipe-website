import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error('Error fetching recipes', error));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default HomePage;
