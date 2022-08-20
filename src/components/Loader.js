import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from 'prop-types';

function Loader({ isLoading }) {

  if (!isLoading) {
    return <></>
  }

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool
}
export default Loader;
