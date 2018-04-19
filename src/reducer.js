import {
  VALIDATE_ADDRESS,
  VALIDATION_ERROR,
  VALIDATION_SUCCESS,
  RESET_VALIDATION
} from "./actions";

const initialState = {
  errorMsg: "",
  successMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_VALIDATION:
      return { ...initialState };
    case VALIDATION_ERROR:
      return { ...initialState, errorMsg: action.errorMsg };
    case VALIDATION_SUCCESS:
      return { ...initialState, successMsg: action.successMsg };
    default:
      return state;
  }
};
