import { ActionTypes } from "../contents/action-types";

export const setProducts = (products) => {
    return {
        typee:ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (products) => {
    return {
        typee:ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};