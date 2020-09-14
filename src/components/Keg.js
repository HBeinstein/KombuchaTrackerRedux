import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h1>{props.name}</h1>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenKegClicked: PropTypes.func // new PropType
};

export default Keg;