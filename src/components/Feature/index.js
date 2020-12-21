import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

export default class Feature extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <FeatureContainer>
        <h1> Being Ardent Special Offer</h1>
        <p>20 % Discount on all Orders above Rs. 500</p>
        <FeatureButton>Buy Now</FeatureButton>
      </FeatureContainer>
    );
  }
}
