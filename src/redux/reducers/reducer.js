import { REGISTRATION } from "./../actions/action";
import { REGISTRATION_SUCCESS,REGISTRATION_FAILURE } from "./../actions/action";
export const initialState = {
  username: "",
  password: "",
  isAdmin:false
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isAdmin: true
      };
      case REGISTRATION_FAILURE :
      return {
        ...state,
        isAdmin:false
      };
    default:
      return state;
  }
}
