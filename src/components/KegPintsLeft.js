import React from "react";
import PropTypes from "prop-types";

function KegPintsLeft(props){
  return (
    <React.Fragment>
      <p>{props.pintsLeft} pints left in this keg!</p>
      <button onClick={ props.handlePintsLeft }>Remove pint (if sold)</button>
    </React.Fragment> 
  )
}

KegPintsLeft.propTypes = {
  handlePintsLeft: PropTypes.func,
  pintsLeft: PropTypes.number
};

export default KegPintsLeft;