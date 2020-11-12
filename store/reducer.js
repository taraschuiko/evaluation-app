import { LOGIN } from './actions';

const initialState = {
  auth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, auth: action.payload };
    }
    default: return state;
  }
};

export default reducer;
