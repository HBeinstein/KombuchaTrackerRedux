import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;