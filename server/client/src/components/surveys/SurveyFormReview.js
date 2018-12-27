import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import { submitSurvey } from "../../actions";

export class SurveyFormReview extends Component {
  renderFields = () => {
    const { formValues } = this.props;
    return formFields.map(({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  };
  render() {
    const { onCancel, submitSurvey, formValues, history } = this.props;
    return (
      <div>
        <h5>Please confirm your entries:</h5>
        <div>{this.renderFields()}</div>
        <button
          className="yellow darken-2 btn-flat white-text"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green btn-flat right white-text"
        >
          <i className="material-icons right">send</i>Send Survey
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};
export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview));
