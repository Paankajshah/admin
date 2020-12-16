import * as authTypes from "./authTypes";
import { errorHandler } from "../errorAction/errorActions";
import axios from "axios";

export const authenticate = (data) => {
  return (dispatch) => {
    dispatch({ type: authActions.START_AUTHENTICATION });
    axios
      .post("/auth", { ...data })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: authActions.AUTHENTICATION_SUCCESS,
          token: res.data.token,
        });
      })
      .catch((err) => {
        dispatch({ type: authActions.AUTHENTICATION_FAIL });
        dispatch(
          errorHandler(
            err.response
              ? err.response.data.message
              : "Couldn't authenticate. Please try again later"
          )
        );
      });
  };
};

export const authCheck = () => {
  return (dispatch) => {
    dispatch({ type: authActions.START_AUTHENTICATION });
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/auth/check-token", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.valid) {
            dispatch({
              type: authActions.AUTHENTICATION_SUCCESS,
              token: token,
            });
          } else {
            dispatch(logout());
          }
        })
        .catch((err) => {
          dispatch(logout());
        });
    } else {
      dispatch(logout());
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: authActions.LOG_OUT });
  };
};
