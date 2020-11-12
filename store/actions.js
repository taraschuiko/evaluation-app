export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
    payload: true,
  };
}

export function loginAsync() {
  return (dispatch) => setTimeout(() => {
    dispatch(login());
  }, 1000);
}
