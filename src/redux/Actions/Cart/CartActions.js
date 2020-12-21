import {
  ADD_TO_CART,
  ON_ADDON_CHANGE,
  SET_ADDON_COST,
  DISPLAY_ADDONS,
  HANDLE_MIN_ITEMS,
  KILL_CURRENT_STATE,
  SHOW_ALL_DETAILS
} from "./CartActionsTypes";

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};



export const onAddonItemsChange = data => {
  return {
    type: ON_ADDON_CHANGE,
    payload: data
  };
};



export const setAddonCost = data => {
  return {
    type: SET_ADDON_COST,
    payload: data
  };
};

export const displayAddonItems = data => {
  return {
    type: DISPLAY_ADDONS,
    payload: data
  };
};


export const handleMinItems = () => {
  return {
    type: HANDLE_MIN_ITEMS
  };
};

export const killAllValues = () => {
  return {
    type: KILL_CURRENT_STATE
  };
};

export const showAllDetails = () => {
  return {
    type: SHOW_ALL_DETAILS
  };
};
