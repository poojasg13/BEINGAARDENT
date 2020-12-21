import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Cart/CartActions";
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartMenu,
  CartDataWrapper,
  CartItem,
  CartWrapper,
  CartHeader,
  CartHeading,
  CartBox,
  CartItemWrapper,
  CartItemBilling,
  CartItemData,
  CartBillingData,
  CartDataContainer,
  CartDataContainer1,
  CartDataContainer2,
  CartBillingWrapper,
  CartItemAdd,
  Div3,
  Div4,
  Div5,
  TotalBillingDetails,
  TotalAmountWrapper,
  CheckoutDiv,
  TotalHeading,
  TotalAmount,
  TotalBillingWrapper,
  CartEmpty,
  CartEmptyImage
} from "./CartElements";
import { emptyCart } from "./data";

class Cart extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  ComputeTotal(cartData) {
    var data = cartData;
    var cartTotal = data.reduce(function(prev, cur) {
      return prev + cur.price ;
    }, 0);
    return cartTotal;
  }
  IncreaseItem(data){
    var cartObj = this.props.cart;
    var count = cartObj[data[0]].accessories[data[1]].options[data[2]].count;
    cartObj[data[0]].accessories[data[1]].options[data[2]].count = count == null ? 2 : count+1; 
    cartObj[data[0]].price = cartObj[data[0]].price + cartObj[data[0]].accessories[data[1]].options[data[2]].price
    this.props.addToCart(cartObj);
  }
  DecreaseItem(data){
    var cartObj = this.props.cart;
    cartObj[data[0]].price = cartObj[data[0]].price - cartObj[data[0]].accessories[data[1]].options[data[2]].price
    var count = cartObj[data[0]].accessories[data[1]].options[data[2]].count;
    if(count == null || count === 1){
      cartObj[data[0]].accessories[data[1]].options.splice(data[2],1);
      if(cartObj[data[0]].accessories[data[1]].options.length === 0){
        cartObj[data[0]].accessories.splice(data[1],1);
        if (cartObj[data[0]].accessories.length === 0){
          cartObj.splice(data[0],1);
        }
      }
    }else{
      cartObj[data[0]].accessories[data[1]].options[data[2]].count = count - 1;     
    }   

    this.props.addToCart(cartObj);
  }

  render() {
    if (
      this.props.cart == null ||
      this.props.cart == null ||
      this.props.cart.length === 0
    ) {
      return (
        <CartContainer isOpen={this.props.isOpen}>
          <Icon onClick={this.props.toggle}>
            <CloseIcon />
          </Icon>
          <CartEmpty>
            <CartEmptyImage src={emptyCart} alt="Empty Cart" />
          </CartEmpty>
        </CartContainer>
      );
    }
    return (
      <CartContainer isOpen={this.props.isOpen}>
        <CartWrapper>
          <CartHeader>
            <CartHeading>Cart</CartHeading>
            <Icon onClick={this.props.toggle}>
              <CloseIcon />
            </Icon>
          </CartHeader>
          <CartBox />
          <CartMenu>
            <CartDataWrapper>
              {this.props.cart.map((cartItem, index) => {
                return (
                  <CartItem>
                    <CartItemWrapper>
                      <CartItemData>
                        <CartDataContainer left="10px">
                          {cartItem.name}
                          
                        </CartDataContainer>
                        {cartItem.accessories.map((accessItem,index1) => {
                          return (
                            <div>
                           <CartDataContainer1 >{accessItem.name}   </CartDataContainer1>
                            
                       
                          {accessItem.options.map((item,index2) =>{
                                return(

                                  <CartBillingData>
                                      <CartDataContainer2 > {item.name}    </CartDataContainer2>
                                   
                         <CartBillingWrapper>
                           <CartItemAdd>
                             <Div3 onClick={this.IncreaseItem.bind(this, [index,index1,index2])}>+</Div3>
                             <Div4 onClick={this.DecreaseItem.bind(this,[index,index1,index2])}></Div4>
                             <Div5>{item.count == null ? 1 : item.count }</Div5>
                           </CartItemAdd>
                           <CartItemBilling>
                             <span className="amountSpan">
                               {"  "}Rs.{" "}
                               {parseInt(item.price) *
                                 parseInt(item.count == null ? 1 : item.count)}
                             </span>
                           </CartItemBilling>
                         </CartBillingWrapper>
                       </CartBillingData> 
                                );

                          })}
                          
                            </div>
                                                
                                              


                         );
                        })}
                      </CartItemData>
                      
                    </CartItemWrapper>
                  </CartItem>
                );
              })}
            </CartDataWrapper>
          </CartMenu>
          <TotalBillingWrapper>
            <TotalBillingDetails>
              <TotalAmountWrapper>
                <TotalHeading>Total</TotalHeading>
                <TotalAmount>{this.ComputeTotal(this.props.cart)}</TotalAmount>
              </TotalAmountWrapper>
              <CheckoutDiv>CHECKOUT</CheckoutDiv>
            </TotalBillingDetails>
          </TotalBillingWrapper>
        </CartWrapper>
      </CartContainer>
    );
  }
}

const mapStateToProps = state => ({  
  totalCost: state.cartReducerState.totalCost,
  addonCost: state.cartReducerState.addonCost,
  addons: state.cartReducerState.addons,
  options: state.cartReducerState.options,
  cart: state.cartReducerState.cart
});

const mapDispatchToProps = {
  ...Actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
