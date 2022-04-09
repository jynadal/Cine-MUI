import { ActionTypes } from "../contents/action-types";

const initialState = {
    products:[
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1
    },
],
};
export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
            // break;
    
        default:
             return state
    }

}