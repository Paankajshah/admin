import * as errorActions from "../Actions/errorAction/errorActions";

const initState = {
  createSuccess: false,
  authError: {
    value: false,
    msg: "",
  },
  requestError: {
    value: false,
    msg: "",
  },
};

export const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case errorActions.AUTH_ERROR:
      return {
        ...state,
        authError: {
          ...state.authError,
          value: true,
          msg: action.msg,
        },
      };

    case errorActions.CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
      };

    case errorActions.SET_DEFAULT:
      return {
        ...initState,
      };

    case errorActions.SET_AUTH_ERROR:
      return {
        ...state,
        authError: {
          ...state.authError,
          value: false,
        },
      };
   
    case errorActions.REQUEST_ERROR:
      return {
        ...state,
        requestError: {
          ...state.requestError,
          msg: action.errMsg,
          value: true,
        },
      };
    default:
      return state;
  }
};
