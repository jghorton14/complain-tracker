import { actionTypes } from "../actions/index";

const initialState = {
  user: {},
  isAuth: false
}

const login = (state = initialState, action) => {
  if (action.type === actionTypes.saveGoogleUser) {
    return {
      ...state,
      user: action.user,
      isAuth: true,
    };
  } else {
    return state;
  }
};

export default login;
