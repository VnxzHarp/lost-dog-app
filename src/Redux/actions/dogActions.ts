import * as types from "./actionTypes";
import * as dogApi from "../../api/dogApi";
import { beginApiCall } from "./apiStatusActions";

export function loadDogSuccess(dogs) {
  return {
    type: types.LOAD_DOGS_SUCCESS,
    dogs,
  };
}

export function createDogSuccess(dog) {
  return { type: types.CREATE_DOG_SUCCESS, dog };
}
export function updateDogSuccess(dog) {
  return { type: types.UPDATE_DOG_SUCCESS, dog };
}

export function loadDog() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return dogApi
      .getDogs()
      .then((dogs) => {
        dispatch(loadDogSuccess(dogs));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveDog(dog) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return dogApi
      .saveDog(dog)
      .then((savedDog) => {
        dog.id
          ? dispatch(updateDogSuccess(savedDog))
          : dispatch(createDogSuccess(savedDog));
      })
      .catch((error) => {
        throw error;
      });
  };
}
