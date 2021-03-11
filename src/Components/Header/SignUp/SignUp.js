

import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

//import AuthContext from "../../../context/AuthContext";

function SignUp() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        nom,
        prenom,
        email,
        password,
     
      };

       await axios.post("http://localhost:3001/user/signup", registerData);
     // await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={register}>
      <div className="form-group text-left">
      <label >Nom</label>
      <input
      className = "form-control"
          type="text"
          placeholder="Nom"
          onChange={(e) => setNom(e.target.value)}
          value={nom}
          autoComplete="off"
          required
        />
        </div>
        <div className="form-group text-left">
        <label >Prenom</label>
         <input
         className = "form-control"
        type="text"
        placeholder="Prenom"
        onChange={(e) => setPrenom(e.target.value)}
        value={prenom}
        autoComplete="off"
        required
      />
      </div>
      <div className="form-group text-left">
      <label >Email address</label>
        <input
        className = "form-control"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="off"
          required
        />
        </div>
        <div className="form-group text-left">
        <label >Password</label>
        <input
        className = "form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
          required
        />
        </div>
     
        <button type="submit" className="btn btn-primary ">Register</button>
      </form>
    </div>
  );
}

export default SignUp;

///////////////////////////////////////////////////////////////////////////////////////////////**
////////////////////////top march with some errors of validation////////////////////**

// import React, {useState} from 'react';
// import axios from 'axios';
// import './SignUp.css';

// import { withRouter } from "react-router-dom";

// function SignUp(props) {
//   const API_BASE_URL = "http://localhost:3001/api/Users/signup";
//     const [state , setState] = useState({
//          nom: "",
//        prenom : "",
//         email : "",
//         password : "",
//     })

//     const handleChange = (e) => {
//         const {id , value} = e.target   
//         setState(prevState => ({
//             ...prevState,
//             [id] : value
//         }))
//     }

//     const sendDataToServer = () => {
//         if(state.nom.length && state.prenom.length && state.email.length && state.password.length ) {
//             props.showError(null);
//             const payload={
//                 "nom":state.nom,
//                 "prenom":state.prenom,
//                 "email":state.email,
//                 "password":state.password,
//             }
//             axios.post(API_BASE_URL, payload)
//                 .then(function (response) {
//                     if(response.status === 200){
//                         setState(prevState => ({
//                             ...prevState,
//                             'successMessage' : 'Registration successful. Redirecting to home page..'
//                         }))
//                     //     localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
//                     //     redirectToHome();
//                     //     props.showError(null)
//                     // } else{
//                         props.showError("Some error ocurred");
//                     }
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });    
//         } else {
//             props.showError('Please enter valid username and password')    
//         }
        
//     }
//     const redirectToHome = () => {
//         props.updateTitle('Accueil')
//         props.history.push('/Accueil');
//     }
//     const redirectToLogin = () => {
//         props.updateTitle('Login')
//         props.history.push('/login'); 
//     }
//     const handleSubmitClick = (e) => {
//         e.preventDefault();
//         if(state.password === state.confirmPassword) {
//             sendDataToServer()    
//         } else {
//             props.showError('Passwords do not match');
//         }
//     }
//     return(
//         <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//             <form>
//             <div className="form-group text-left">
//                 <label htmlFor="exampleInputEmail1">Nom</label>
//                 <input type="text" 
//                        className="form-control"
//                        placeholder="Enter Nom" 
//                        value={state.nom}
//                        onChange={handleChange}
//                 />
//                 </div>
//             <div className="form-group text-left">
//                 <label htmlFor="exampleInputEmail1">Prenom</label>
//                 <input type="text" 
//                        className="form-control" 
//                        placeholder="Enter Nom" 
//                        value={state.prenom}
//                        onChange={handleChange}
//                 />
//                 </div>
//                 <div className="form-group text-left">
//                 <label htmlFor="exampleInputEmail1">Email address</label>
//                 <input type="email" 
//                        className="form-control" 
//                        id="email" 
//                        aria-describedby="emailHelp" 
//                        placeholder="Enter email" 
//                        value={state.email}
//                        onChange={handleChange}
//                 />
//                 </div>
//                 <div className="form-group text-left">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input type="password" 
//                         className="form-control" 
//                         id="password" 
//                         placeholder="Password"
//                         value={state.password}
//                         onChange={handleChange} 
//                     />
//                 </div>
//                 <button 
//                     type="submit" 
//                     className="btn btn-primary"
//                     onClick={handleSubmitClick}
//                 >
//                     Register
//                 </button>
//             </form>
//             <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
//                 {state.successMessage}
//             </div>
//             <div className="mt-2">
//                 <span>Already have an account? </span>
//                 <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
//             </div>
            
//         </div>
//     )
// }

// export default withRouter(SignUp);