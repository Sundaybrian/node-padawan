import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./authContext";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // loading

  // register

  // login

  // logout

  // clear errors

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
