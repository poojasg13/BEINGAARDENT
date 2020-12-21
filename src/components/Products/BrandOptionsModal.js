import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Cart/CartActions";
import { Collapse, Container, Paper, Typography, fade } from "@material-ui/core";
import { Link, Element } from "react-scroll";
import { productData, options  } from "../../components/Products/data";

import {
  ModalWrapper,
  CloseModalButton,
  ModalHead,
  ModalHeadContainer,
  ModalHeadContent,
  ModalDataContainer,
  ModalDataBox,
  ModalDataWrapper,
  ModalBox,
  ModalChoicesList,
  ModalChoicesWrapper,
  ModalChoice,
  ChoiceName,
  ChoiceOptions,
  ModalFooter,
  ModalSelectedItemsWrapper,
  ModalSelectedItems,
  SelectedAddonsCount,
  SelectedAddonsShow,
  AddItemsBtnWrap,
  CheckBoxLabel,
  ValidationDiv,
  ModalValidationWrapper,
  ProductImg
} from "./ProductsElements";
import Modal from "react-modal";
import FoodOptionsModalStyles from "./BrandOptionsModal.css";

class BrandOptionsModal extends React.Component {
  
  constructor() {
    super();
  }

  componentDidMount() {    
   
  }

  onClose = e => {
    this.props.killAllValues();
    this.props.onClose && this.props.onClose(e);
  };

  AddNewItem(data) {
    if(this.props.addons.length === 0){
      this.props.handleMinItems();
      setTimeout(() => {
        this.props.handleMinItems();
      }, 1000);
    }else{
      var cartObj = this.props.cart;
      var sportId=data.id.split("_")[0];
      var findValue = cartObj.findIndex(x => (x.id = sportId));
      
      if(findValue === -1){
  
        var newItem = {
          cartId: Date.now(),
          sportId: sportId,
          name: productData.find(prod => prod.id === sportId).name,
          price: this.props.addonCost,
          accessories:[ {id:data.id,name:data.name,options:this.props.addons}]        
        };
        cartObj.push(newItem);
      }
      else{
        var accessList = cartObj[findValue].accessories.findIndex(access => access.id === data.id);
        cartObj[findValue].price += this.props.addonCost;
        if(accessList === -1){        
          cartObj[findValue].accessories.push({id:data.id,name:data.name,options:this.props.addons});
        }
        else{
          this.props.addons.forEach(addon => {
           var itemIndex = cartObj[findValue].accessories[accessList].options.findIndex(item => item.id === addon.id );
           if(itemIndex === -1){
            cartObj[findValue].accessories[accessList].options.push(addon);
           }
           else{
             var count = cartObj[findValue].accessories[accessList].options[itemIndex].count;
            cartObj[findValue].accessories[accessList].options[itemIndex].count = count == null ? 2 :  count++;
           }
           
          });
          
        }
      }
  
      
      
      this.props.addToCart(cartObj);
      console.log(this.props.cart);
    }
    
  }

  onItemChange(val) {

    var currentAddons = this.props.addons;
    var currentTotal = this.props.addonCost;
    var checkboxes = document.getElementsByName("addonCheckbox");
    var numberOfCheckedItems = 0;
    var optionSelected = [];
    for (var i = 0; i < checkboxes.length; i++) {
      var index = currentAddons.findIndex(x => x.id === checkboxes[i].id);
      if (index === -1 && checkboxes[i].checked === true) {
        currentTotal += val.price;
        var joined = currentAddons.push(val);
        this.props.onAddonItemsChange(currentAddons);
      } else if (index >= 0 && checkboxes[i].checked === false) {
        currentAddons.splice(index, 1);
        currentTotal -= val.price;
        this.props.onAddonItemsChange(currentAddons);
      }
    }
    var addonItems = [];
    this.props.addons.forEach(element => {
      addonItems.push(element.name);
    });
    this.props.displayAddonItems(addonItems.join(","));
    this.props.setAddonCost(currentTotal);
  }

  

  showSelectedDetails() {
    this.props.showAllDetails();
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <Modal
        id={this.props.data.id}
        className="BrandModal"
        isOpen={this.props.showModal}
      >
        <ModalWrapper>
          <ModalHead>
            <ModalHeadContainer>
              <ModalHeadContent>
                <div className="HeadText">{this.props.data.name}</div>
                <div className="CostDiv">
                  <span className="CostSpan">
                    Total
                    <span className="rupees">{this.props.data.price}</span>
                  </span>
                </div>
                <CloseModalButton
                  onClick={this.onClose}
                  aria-label="Close Modal"
                />
              </ModalHeadContent>
            </ModalHeadContainer>
          </ModalHead>
          <ModalDataContainer>
            <ModalDataBox>
              
              <ModalDataWrapper>
               
                <ModalChoicesList id="containerElement">
                  <ModalChoicesWrapper id="containerElement">
                      <ModalChoice>
                        <ChoiceName>Brands</ChoiceName>
                        <ChoiceOptions>
                          {options.find(opt => opt.id === this.props.data.id).categories.map(
                            (addon, index) => {
                              return (
                                <>
                                  <CheckBoxLabel>
                                    {addon.name} {"   "}
                                    {"   "}
                                    <span className="rupees">
                                      {addon.price}
                                    </span>
                                    <input
                                      type="checkbox"
                                      name="addonCheckbox"
                                      id={addon.id}
                                      onChange={this.onItemChange.bind(
                                        this,
                                        addon
                                      )}
                                      value={addon.name}
                                    />
                                    <span className="checkmark"></span>
                                  </CheckBoxLabel>
                                  <ProductImg isPopUp={true} src={addon.img}  />
                                </>
                              );
                            }
                          )}
                        </ChoiceOptions>
                      </ModalChoice>
                  </ModalChoicesWrapper>
                </ModalChoicesList>
              </ModalDataWrapper>
            </ModalDataBox>
          </ModalDataContainer>
          <ModalValidationWrapper>
            <Collapse in={this.props.hasNoItems} >
              <ValidationDiv>
                You can select only three three favorite sauce!
              </ValidationDiv>
            </Collapse>
          </ModalValidationWrapper>
          <ModalFooter>
            <ModalBox />
            <Collapse in={!this.props.showDetails}>
              <ModalSelectedItemsWrapper>
                <ModalSelectedItems>
                  <SelectedAddonsCount
                    onClick={this.showSelectedDetails.bind(this)}
                  >
                    {this.props.options.length + this.props.addons.length}
                  </SelectedAddonsCount>
                 
                </ModalSelectedItems>
              </ModalSelectedItemsWrapper>
            </Collapse>
            <Collapse in={this.props.showDetails}>
              <ModalSelectedItemsWrapper>
                <SelectedAddonsShow
                  onClick={this.showSelectedDetails.bind(this)}
                >
                  Hide
                </SelectedAddonsShow>
                
              </ModalSelectedItemsWrapper>
            </Collapse>
            <AddItemsBtnWrap
              onClick={this.AddNewItem.bind(this, this.props.data)}
            >
              <span className="price">
                Total
                <span className="rupees">
                  {parseInt(this.props.data.price) +
                    parseInt(this.props.addonCost)}
                </span>
              </span>
              <span className="addItem">ADD ITEM</span>
            </AddItemsBtnWrap>
          </ModalFooter>
        </ModalWrapper>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  
  totalCost: state.cartReducerState.totalCost,
  addonCost: state.cartReducerState.addonCost,
  addons: state.cartReducerState.addons,
  options: state.cartReducerState.options,
  cart: state.cartReducerState.cart, 
  showDetails: state.cartReducerState.showDetails,
  hasNoItems: state.cartReducerState.hasNoItems,
});

const mapDispatchToProps = {
  ...Actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandOptionsModal);
