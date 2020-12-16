import * as authActions from "../../Actions/AuthAction/authTypes";
import * as errorActions from "../../Actions/ErrorAction/errorTypes";

const initState = {
  token: null,
  loginLoader: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.START_AUTHENTICATION:
      return {
        ...state,
        loginLoader: true,
      };

    case authActions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loginLoader: false,
        token: action.token,
      };

    case authActions.AUTHENTICATION_FAIL:
      return {
        ...state,
        loginLoader: false,
      };

    case errorActions.AUTH_ERROR:
      return {
        ...state,
        loginLoader: false,
      };
    case authActions.LOG_OUT:
      return { ...initState };
    default:
      return state;
  }
};
