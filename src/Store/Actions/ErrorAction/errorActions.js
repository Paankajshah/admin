import * as errorActions from "./errorTypes";

export const errorHandler = (msg) => {
  return (dispatch) => {
    dispatch({ type: errorActions.AUTH_ERROR, msg: msg });
    setTimeout(() => {
      dispatch(setAuthError());
    }, 2000);
  };
};

export const requestError = (errMsg) => {
  return (dispatch) => {
    dispatch({ type: errorActions.REQUEST_ERROR, errMsg });
    setTimeout(() => {
      dispatch(setDefault());
    }, 500);
  };
};

export const setDefault = () => {
  return (dispatch) => {
    dispatch({ type: errorActions.SET_DEFAULT });
  };
};

export const setAuthError = () => {
  return (dispatch) => {
    dispatch({ type: errorActions.SET_AUTH_ERROR });
  };
};
