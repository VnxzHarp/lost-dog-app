import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/dogs/";
const baseUrl = "http://localhost:3001/dogs";

export function getDogs() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDog(dogs) {
  return fetch(baseUrl + (dogs.id || ""), {
    method: dogs.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dogs),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDog(dogId) {
  return fetch(baseUrl + dogId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
