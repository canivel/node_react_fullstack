import axios from "axios";
// import history from "../history";
import { FETCH_USER } from "./types";

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
  const response = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};
