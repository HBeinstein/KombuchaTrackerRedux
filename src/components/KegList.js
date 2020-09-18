import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      <h2>Add a keg below and click on any keg to see more details!</h2>
      <hr/>
      {props.kegList.map((keg) =>
          <Keg 
            whenKegClicked = { props.onKegSelection } 
            name = {keg.name}
            id = {keg.id}
            key = {keg.id}/>
            
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;