import { actionTypes } from "../actions/index";

const initialState = {
  complaint: {}
}

const complaint = (state = initialState, action) => {
  // Save name of Person
  if (action.type === actionTypes.saveComplaintPerson) {
    return {
      ...state,
      complaint: {
        person: action.person
      }
    };
  } else {
    return state;
  }
};

export default complaint;
