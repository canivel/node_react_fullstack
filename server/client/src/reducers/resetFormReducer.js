import { RESET_FORM } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case RESET_FORM:
      delete state.form;
      return state;
    default:
      return state;
  }
};
