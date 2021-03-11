import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

 import './SearchBar.css';

const SearchBar = () => {
  const APP_ID = '23b19a81';
  const APP_KEY = '10d454b3c2543dcdf8e1858b3e1b8f51';
// new key if the current one stops
//   const APP_ID = '38a27524';
// const APP_kEY = '97588ebe488a168dfae5657ae383217a';

  // The Recepies Fetched
  const [Recipes, setRecipes] = useState([]);
  // The value tyoed in search
  const [Search, setSearch] = useState('');
  // Complete Search
  const [Query, setQuery] = useState('');


  // The rendering function
  useEffect(() => {
    (async () => getRecepies())();
  }, [Query]);

  const exampleRed = `https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // Fetch data from the API and set the state of Recipe
  const getRecepies = async () => {
    const response = await fetch(exampleRed);
    const data = await response.json();
    setRecipes(data.hits);
  };

  // Update the state Search on every change
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Get the value of Search when a complete word is entered
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(Search);
  };

  // Capitalize the first letter of word
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className='App'>
      <h1 className='header'>Recettes</h1>
        <form onSubmit={getSearch} className='search-form '>
          <input
            className='search-bar1'
            type='text'
            value={Search}
            onChange={updateSearch}
          />
        <button type="submit" className="search-button">
      <i className="fas fa-search" />
      Search
    </button>
        </form>
   
      <div id='head'>
     
        <div className='recipes'>
          {Recipes.map((recipe) => (
            <Recipe
              key={Recipes.indexOf(recipe)}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories.toFixed(5)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
