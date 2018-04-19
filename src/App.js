import React from "react";
import { connect } from "react-redux";
import { resetValidation, validationError, validationSuccess } from "./actions";

import checkAddressValidity from "./check-address";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  onAddressChange = e => {
    this.setState({ address: e.target.value });
  };

  validateAddress = () => {
    this.props.resetValidation();
    if (checkAddressValidity(this.state.address)) {
      this.props.validationSuccess("Address valid");
    } else {
      this.props.validationError("Validation error");
    }
  };

  renderPopup = msg => {
    return (
      <div className="popup">
        <div className="popup-closer" onClick={this.props.resetValidation}>
          X
        </div>
        <span>{msg}</span>
      </div>
    );
  };

  renderInput = () => {
    const { errorMsg } = this.props;

    return (
      <div className="input-wrapper">
        {errorMsg ? <div className="error-message">{errorMsg}</div> : null}
        <input
          className="input"
          type="text"
          placeholder="ETH Address"
          onChange={this.onAddressChange}
          value={this.state.address}
        />
      </div>
    );
  };

  render() {
    const { successMsg } = this.props;
    return (
      <div className="wrapper">
        <h2>Validate ETH form</h2>
        {successMsg ? this.renderPopup(successMsg) : null}
        <form>
          {this.renderInput()}
          <div className="submit-button" onClick={this.validateAddress}>
            Validate Address
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ successMsg, errorMsg }) => ({
  successMsg,
  errorMsg
});

export default connect(mapStateToProps, {
  resetValidation,
  validationError,
  validationSuccess
})(App);
