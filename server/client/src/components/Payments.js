import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

export class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Canivel"
          description="$5 for 5 Ai credits"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(
  null,
  {
    handleToken
  }
)(Payments);
