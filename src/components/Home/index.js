import React, { useState } from "react";
import Navbar from "../Navbar";
import Cart from "../Cart";
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomeBtn
} from "./HomeElements";

export default class Home extends React.Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <HomeContainer>
          <Navbar toggle={this.toggle.bind(this)} />
          <Cart isOpen={this.state.isOpen} toggle={this.toggle.bind(this)} />
          <HomeContent>
            <HomeItems>
              <HomeH1>BEING ARDENT</HomeH1>
              <HomeP> GET SWEAT GO </HomeP>
              <HomeBtn>Buy Now</HomeBtn>
            </HomeItems>
          </HomeContent>
        </HomeContainer>
      </>
    );
  }
}
