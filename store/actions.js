export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
    payload: true,
  };
}

export function loginAsync() {
  // Placeholder url fetching
  return (dispatch) => fetch('https://jsonplaceholder.typicode.com/users').then(() => dispatch(login()));
}
