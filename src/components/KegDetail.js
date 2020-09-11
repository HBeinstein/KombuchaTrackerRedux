import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit} = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.location} - {keg.names}</h3>
      <p><em>{keg.issue}</em></p>
      <button onClick={() => onClickingEdit()}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id) }>Delete Keg</button>
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
