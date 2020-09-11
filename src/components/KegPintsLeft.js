import React from "react";
import PropTypes from "prop-types";

class KegPintsLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pintsLeft: 128
    };
  }

  handlePintsLeft = () =>{
    if(this.state.pintsLeft > 0){
      const newPintsLeft = this.state.pintsLeft - 1;
      this.setState({pintsLeft: newPintsLeft});
    }
  }

  render(){
    return (
      <React.Fragment>
        <p>{this.state.pintsLeft} pints left in this keg!</p>
        <button onClick={ this.handlePintsLeft }>Remove pint (if sold)</button>
      </React.Fragment>
    )
  }

}

// KegDetail.propTypes = {
//   keg: PropTypes.object,
//   onClickingDelete: PropTypes.func,
//   onClickingEdit: PropTypes.func
// };

export default KegPintsLeft;