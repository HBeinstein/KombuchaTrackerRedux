import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit} = props;
  console.log(keg);

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h2>{keg.name}</h2>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>

      {/* <button onClick={() => onClickingEdit()}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id) }>Delete Keg</button> */}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;

//why update and delete onclick functions are different
