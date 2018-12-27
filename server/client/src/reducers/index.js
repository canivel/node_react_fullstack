import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import resetFormReducer from "./resetFormReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  reset: resetFormReducer
});
