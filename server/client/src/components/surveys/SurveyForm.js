import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

export class SurveyForm extends Component {
  renderFields = () => {
    return formFields.map(({ label, name }) => {
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
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
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

  errors.recipients = validateEmails(values.recipients);
  formFields.forEach(({ name, label, required }) => {
    if (required && !values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
