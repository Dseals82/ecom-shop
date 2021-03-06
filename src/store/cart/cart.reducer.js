import CART_ACTION_TYPES from './cart.types';


const INITIAL_STATE = {
    cartItems: [],
    toggleCart: false,
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (state=INITIAL_STATE, action) => {
    const {type,payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_TOGGLE_CART:
            return {
                ...state,
                toggleCart: payload
            }
        
        default:
            throw new Error(`Unhandled type ${type} in the cart Reducer `)
    }
}