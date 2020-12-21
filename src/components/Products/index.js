import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Products/ProductsActions";
import { Link, Element } from "react-scroll";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductButton
} from "./ProductsElements";
import BrandOptionsModal from "./BrandOptionsModal";


class Products extends React.Component {
  componentDidMount() {}
  handleNavigation = id => {
    if(this.props.type === "main"){
        document.getElementById("access_"+id).scrollIntoView({
          behavior:"smooth",
          block:"start",
          inline:"nearest"
        });
    }
    else{
      var data = this.props.openProductModal(id);
    }
  };
  closeModal = e => {
    this.props.closeModal();
  };
  render() {
    return (
      <ProductsContainer id={this.props.id}>
        <ProductsHeading type={this.props.type === "main"}>{this.props.heading}</ProductsHeading>
        <ProductWrapper>
          {this.props.data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg isPopUp={false} src={product.img}  />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                 
                  <ProductButton
                  onClick={() => this.handleNavigation(product.id)}
                  id={product.id}
                  >
                  
                    <div > {this.props.type === "main" ? "Go to Accessories" : "Check Brands" } </div>
                 
                  </ProductButton>                
                </ProductInfo>       
                <BrandOptionsModal
                  data={product}
                  onClose={this.closeModal}
                  save={this.addToCart}
                  showModal={this.props.showModal === product.id}
                />         
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
}
const mapStateToProps = state => ({
  showModal: state.productsReducerState.showModal
});

export default connect(
  mapStateToProps,
  {
    ...Actions
  }
)(Products);

