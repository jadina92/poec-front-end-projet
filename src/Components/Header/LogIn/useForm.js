import { useState, useEffect } from 'react';
import axios from 'axios';
const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail ]= useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    const user = { email, password };
    setErrors(validate(values));
    setIsSubmitting(true);
// send the username and password to the server
const response = await axios.post(
  "http://localhost:3001/user/login",
  user
);
// set the state of the user
setUser(response.data);
// store the user in localStorage
localStorage.setItem('user', response.data);
console.log(response.data);
};
//check if user has previouslly logged in
useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
  }
}, []);
 

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  // vider le input
  setEmail='';
  setPassword= '';
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;


//////////////////////////////////////////////////////////////////////
