import React from 'react';
import './SearchFilter.css';

export const SearchFilter = ({ filterLogic }) => (
  <div>
    <h3>Categories</h3>
    <ul className="filters">
      <li className="filter chicken"  onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
       Viande
      </li>
      <li className="filter" onClick={filterLogic}>
       Poisson
      </li>
      <li className="filter" onClick={filterLogic}>
      Vegan
      </li>
      <li className="filter" onClick={filterLogic}>
       Vegetarian
      </li>
      <li className="filter" onClick={filterLogic}>
      low carbs
      </li>
      <li className="filter" onClick={filterLogic}>
      low sugar
      </li>
      <li className="filter" onClick={filterLogic}>
       protien 
      </li>
      <li className="filter" onClick={filterLogic}>
       San gluten
      </li>
    </ul>
  </div>
);