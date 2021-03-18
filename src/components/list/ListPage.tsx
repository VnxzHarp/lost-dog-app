import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadDog } from "../../redux/actions/dogActions";
import PropTypes from "prop-types";
import ManageFilterList from "./ManageFilterList";
import Spinner from "../common/Spinner";

const ListPage = ({ dogs, loadDog, loading }) => {
  useEffect(() => {
    if (dogs.length === 0) {
      loadDog().catch((error) => {
        alert("loading dogs failer" + error);
      });
    }
  }, []);
  return (
    <>
      <h2 id="header">List of Doggos</h2>
      <h3>Filter the List</h3>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <ManageFilterList listOfDogs={dogs} />
        </div>
      )}

      <a href="#header" className="btn btn-primary">
        {" "}
        Back To Top
      </a>
    </>
  );
};

ListPage.propTypes = {
  dogs: PropTypes.array.isRequired,
  loadDog: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    loading: state.apiCallsInProgress > 0,
  };
}
const mapDispatchToProps = {
  loadDog,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
