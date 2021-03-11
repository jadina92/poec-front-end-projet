// export async function verifyLogin({ email, password }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {

//         if (email  === 'd@me.com' && password === 'password') {
//           resolve();
//         } else {
//           reject();
//         }
//       }, 1000);
//     });
//   }


 
export async function verifyLogin(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };
 
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch('http://localhost:3001/user/login', requestOptions);
    let data = await response.json();
 
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
 
