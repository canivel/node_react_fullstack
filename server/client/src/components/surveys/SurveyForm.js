import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";

const FIELDS = [
  { label: "Survey Campaign Title", name: "campaignTitle", required: true },
  { label: "Email Subject", name: "subject", required: true },
  { label: "Email Body", name: "body", required: true },
  { label: "Recipient List", name: "emails", required: true }
];

export class SurveyForm extends Component {
  renderFields = () => {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          component={SurveyField}
          type="text"
        />
      );
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/dashboard" className="grey btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Review and Send
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  FIELDS.forEach(({ name, label, required }) => {
    if (required && !values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
