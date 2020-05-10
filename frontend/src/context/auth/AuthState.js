import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./authContext";

const AuthState = (props) => {
  const intialState = {
    user: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
