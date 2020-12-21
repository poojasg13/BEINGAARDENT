import {
  ADD_TO_CART,
  SET_INITIAL_STATE,
  ON_ADDON_CHANGE,
  ON_OPTIONAL_CHANGE,
  SET_ADDON_COST,
  DISPLAY_ADDONS,
  DISPLAY_OPTIONS,
  HANDLE_MIN_ITEMS,
  KILL_CURRENT_STATE,
  SHOW_ALL_DETAILS
} from "../Actions/Cart/CartActionsTypes";

const initialState = {
  
  totalCost: 0,
  addonCost: 0,
  addons: [],
  options: [],
  cart: [],
  displayAddons: "",
  displayOptions: "",
  hasNoItems: false,
  showDetails: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: action.payload,
        showModal: 0,
        addonCost: 0,
        addons: [],
        displayAddons: "",
        displayOptions: "",
        hasNoItems: false,
        showDetails: false
      };
    }
    case ON_ADDON_CHANGE: {
      return {
        ...state,
        addons: action.payload
      };
    }
    case ON_OPTIONAL_CHANGE: {
      return {
        ...state,
        options: action.payload
      };
    }
    case SET_INITIAL_STATE: {
      return {
        ...state,
     
        totalCost: action.price,
        hasNoItems: false
      };
    }
    case SET_ADDON_COST: {
      return {
        ...state,
        addonCost: action.payload
      };
    }
    case DISPLAY_ADDONS: {
      return {
        ...state,
        displayAddons: action.payload
      };
    }
    case DISPLAY_OPTIONS: {
      return {
        ...state,
        displayOptions: action.payload
      };
    }

    case HANDLE_MIN_ITEMS: {
      return {
        ...state,
        hasNoItems: !state.hasNoItems
      };
    }
    case KILL_CURRENT_STATE: {
      return {
        ...state,
        showModal: 0,
        addonCost: 0,
        addons: [],
        options: []
      };
    }
    case SHOW_ALL_DETAILS: {
      return {
        ...state,
        showDetails: !state.showDetails
      };
    }
    default:
      return state;
  }
}
