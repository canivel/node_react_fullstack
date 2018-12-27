import React, { Component } from "react";

export class SurveyField extends Component {
  render() {
    const {
      input,
      label,
      meta: { error, touched }
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: "5px" }} />
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </div>
    );
  }
}

export default SurveyField;
