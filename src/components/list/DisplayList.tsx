import React from "react";
import PropTypes from "prop-types";

const DisplayList = ({ dogs }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Color</th>
          <th>Size</th>
          <th>Breed</th>
          <th>Location</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map((dog) => {
          return (
            <tr key={dog.id}>
              <td>
                <a
                  className="btn btn-light"
                  href={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    dog.id +
                    ".png"
                  }
                >
                  <img
                    src={
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                      dog.id +
                      ".png"
                    }
                    alt="doggo"
                  ></img>
                </a>
              </td>
              <td>{dog.color}</td>
              <td>{dog.size}</td>
              <td>{dog.breed}</td>
              <td>{dog.location}</td>
              <td>{dog.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);

DisplayList.propTypes = {
  dogs: PropTypes.array.isRequired,
};

export default DisplayList;
