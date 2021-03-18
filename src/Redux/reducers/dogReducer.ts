import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function dogReducer(state = initialState.dogs, action) {
  switch (action.type) {
    case types.CREATE_DOG_SUCCESS:
      return [...state, { ...action.dog }];
    case types.UPDATE_DOG_SUCCESS:
      return state.map((dog) => (dog.id === action.dog.id ? action.dog : dog));
    case types.LOAD_DOGS_SUCCESS:
      return action.dogs;
    default:
      return state;
  }
}

export default dogReducer;
