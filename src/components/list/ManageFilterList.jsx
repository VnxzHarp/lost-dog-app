/*eslint import/namespace: ['error', { allowComputed: true }]*/

import React, { useState } from "react";
import DisplayList from "./DisplayList";
import PropTypes from "prop-types";
import * as data from "../common/OptionsData";
import SelectInput from "../common/SelectInput";

const initialFilter = { color: "", breed: "", size: "", status: "" };
const dogFilters = [
  { name: "status", label: "Status", defaultOption: "Filter by Status" },
  { name: "size", label: "Size", defaultOption: "Filter by Size" },
  { name: "color", label: "Color", defaultOption: "Filter by Color" },
  { name: "breed", label: "Breed", defaultOption: "Filter by Breed" },
];

const ManageFilterList = (props) => {
  const [filter, setFilter] = useState(initialFilter);

  const filteredList = props.listOfDogs.filter(
    (p) =>
      (p.status === filter.status || filter.status === "") &&
      (p.size === filter.size || filter.size === "") &&
      (p.breed === filter.breed || filter.breed === "") &&
      (p.color === filter.color || filter.color === "")
  );

  const handleReset = () => {
    setFilter(initialFilter);
  };
  return (
    <>
      {dogFilters.map(({ name, label, defaultOption }, index) => (
        <SelectInput
          key={index}
          name={name}
          label={label}
          defaultOption={defaultOption}
          options={data[name].map((item) => ({ value: item, text: item }))}
          onChange={(e) => setFilter({ ...filter, [name]: e.target.value })}
          value={filter[name]}
        />
      ))}
      <div className="content">
        <section>
          <button onClick={handleReset} className="btn btn-primary">
            {" "}
            Reset{" "}
          </button>
        </section>
        <h3>
          Showing {filteredList.length}{" "}
          {status === "found"
            ? "found"
            : status === "missing"
            ? "missing"
            : null}{" "}
          {filteredList.length === 1 ? "doggo" : "doggos"}
          {}
        </h3>
        <section id="dogsList">
          <div>
            <DisplayList dogs={filteredList} />
          </div>
        </section>
      </div>
    </>
  );
};

ManageFilterList.propTypes = {
  listOfDogs: PropTypes.array.isRequired,
};

export default ManageFilterList;
