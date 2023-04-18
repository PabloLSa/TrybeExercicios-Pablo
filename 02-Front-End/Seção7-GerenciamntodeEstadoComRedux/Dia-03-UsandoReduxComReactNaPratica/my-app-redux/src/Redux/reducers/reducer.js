import { ADD_TODO } from "../actions/actions";

const INITAL_STATE = {
  todo: [],
}

const reducer = (state = INITAL_STATE, { type, payload}) => {
switch (type) {
  case ADD_TODO:
      return 
  default:
    return state;
}
}

export default reducer;