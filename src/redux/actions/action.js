export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";
export const setUserInfo = (username, password) => {
  return {
    type: REGISTRATION,
    payload: {
      username: username,
      password: password
    }
  };
};

export const login = (username, password) => dispatch => {
  dispatch(setUserInfo(username, password));
  if (username === "admin" || password === "1234") {
    dispatch({
      type: REGISTRATION_SUCCESS
    });
    return true;
  } else {
    dispatch({
      type: REGISTRATION_FAILURE
    });
    return false;
  }
};
