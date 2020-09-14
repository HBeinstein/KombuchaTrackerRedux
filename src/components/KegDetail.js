import React from "react";
import PropTypes from "prop-types";
import KegPintsLeft from "./KegPintsLeft";

function KegDetail(props){
  const { keg } = props;
  console.log(keg);

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h2>{keg.name}</h2>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>

      <hr/>
      <KegPintsLeft 
        handlePintsLeft = { props.handlePintsLeft } pintsLeft = { keg.pintsLeft }
      />
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  handlePintsLeft: PropTypes.func
};

export default KegDetail;

//why update and delete onclick functions are different
