

import React from "react";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";


export default class App extends React.Component{
  componentDidMount() {}
  render(){
    return (
      <Router>
        <GlobalStyle />
        <Home />
        <Products id="main" heading="Recomended Items for You" type="main" data={productData} />
        <Feature />

        {productDataTwo.map((product, index) => {
            return (
              <Products id={product.id} heading={product.heading} type="access" data={product.Items} />
            );
          })}
        <Footer />
      </Router>
    );
  }
}

