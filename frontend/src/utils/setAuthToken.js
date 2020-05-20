import axios from "axios";

const setAuthToken = (token) => {
  // setting token to the headers of the api calls
  if (token) {
    axios.defaults.headers.common["auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["auth-token"];
  }
};

export default setAuthToken;
