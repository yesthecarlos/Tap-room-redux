import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h3>by {props.brand}</h3>
      <h4>{props.alcohol}% abv</h4>
      <h3>${props.price} </h3>
      <h3>{props.pints} pints left</h3>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  pints: PropTypes.number,
}

export default Keg;