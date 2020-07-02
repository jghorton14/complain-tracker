import { actionTypes } from "../actions/index";

const login = (state = {}, action) => {
  if (actionTypes.saveGoogleUser) {
    return {
      ...state,
      user: action.user,
    };
  } else {
    return state;
  }
};

export default login;
