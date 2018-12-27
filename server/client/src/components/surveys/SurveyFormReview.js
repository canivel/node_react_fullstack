import React, { Component } from "react";
import { connect } from "react-redux";

export class SurveyFormReview extends Component {
  render() {
    const { onCancel } = this.props;
    return (
      <div>
        <h5>Please confirm your entries:</h5>
        <button className="red btn-flat white-text" onClick={onCancel}>
          Back
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.forms.surveyForm.values
  };
};
export default connect(mapStateToProps)(SurveyFormReview);
