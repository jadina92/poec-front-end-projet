
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Components/Header/Accueil/Accueil";
import Categories from "./Components/Header/Categories/Categories";
import SignUp from "./Components/Header/SignUp/SignUp";
import LogIn from "./Components/Header/LogIn/LogIn";
import Wishlist from "./Components/Header/Wishlist/Wishlist";
import SearchBar from "./Components/Header/SearchBar/SearchBar";
import AjoutRecette from "./Components/Header/AjouterRecette/AjoutRecette";


function App() {
  return (
    <>
      <Router> 
        <div className="container">
    <ul className="nav justify-content-center navbar ">
      <li className="nav-item nav-link active"><Link to="/">Accueil</Link></li>
      <li className="nav-item nav-link active"> <Link to="/SearchBar">Recherche</Link></li>
      <li className="nav-item nav-link active"><Link to="/Categories">Categories</Link></li>
      <li className="nav-item nav-link active"> <Link to="/Wishlist">Wishlist</Link></li>
      <li className="nav-item nav-link active "> <Link to="/SignUp">SignUp</Link></li>
      <li className="nav-item nav-link active"> <Link to="/LogIn">LogIn</Link></li>
      <li className="nav-item nav-link active"> <Link to="/AjoutRecette">ajoutrecette</Link></li> 
    </ul>
 
        <Switch>
          <Route path="/Accueil/" render={() => <Accueil />} />
          <Route path="/Categories" render={() => <Categories />} />
          <Route path="/Wishlist" render={() => <Wishlist />} />
          <Route path="/SignUp" render={() => <SignUp />} />
          <Route path="/LogIn" render={() => <LogIn />} />
          <Route path="/AjoutRecette" render={() => <AjoutRecette />} />
          <Route path="/SearchBar" render={() => <SearchBar/>} />
          <Route path="/" exact={true} render={() => <Accueil />} />
          <Route path="/" render={() => <div>Erreur</div>} />
        </Switch>
        </div>
      
      </Router>
    
    </>
  );
}

 export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////



