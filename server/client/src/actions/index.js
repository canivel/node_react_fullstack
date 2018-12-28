import axios from "axios";
import { FETCH_USER, RESET_FORM, FETCH_SURVEYS } from "./types";

// export const fetchUser = () => {
//     return async dispatch => {
//       const response = await axios.get("/api/current_user");

//       dispatch({
//         type: FETCH_USER,
//         payload: response
//       });
//     };
//   };

// is the same as above but better format
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const resetForm = values => {
  delete values.values;
  return {
    type: RESET_FORM,
    payload: values
  };
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
};
