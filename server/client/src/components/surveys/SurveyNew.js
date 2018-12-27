//Toogler between Form and Review
import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { resetForm } from "../../actions";

export class SurveyNew extends Component {
  state = { showFormReview: false };

  componentWillUnmount() {
    //console.log(this.props);
    if (this.props.form) {
      this.props.resetForm(this.props.form);
    }
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.surveyForm
  };
};

export default connect(
  mapStateToProps,
  { resetForm }
)(SurveyNew);
