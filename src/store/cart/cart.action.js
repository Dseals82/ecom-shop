import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

    //helper func that takes in cartItems array and product to be added
    const addCartItem = (cartItems, productToAdd) => {
      //find if cartItems contains parductToAdd
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id) 
      //if found, inc quantity
      if(existingCartItem){
          return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
          {...cartItem, quantity: cartItem.quantity + 1}
          :
          cartItem
          )
      }
      //return new array with modified cartItems/ new cart item
      return [...cartItems, {...productToAdd, quantity:1}];
  };
  
  const deleteCartItem =(cartItems, productToRemove) => {
      //find the cart item to remove
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  
      //check if quanitity is === to 1, if so, remove
      if(existingCartItem.quantity === 1){
          return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
      }
  
      //return back cartItems with  matching cart item with reduced quanitity
      if(existingCartItem){
          return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
          {...cartItem, quantity: cartItem.quantity - 1}
          :
          cartItem
          )
      }
  };
  
  const deleteCartItemButton = (cartItems, itemToDelete) => {
      //find the cart item to delete
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToDelete.id);
  
      //if item exist, delete by returning new array that does not include the seleted item
      if(existingCartItem){
          return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id)
      }
  }
 

 //triggers whenever user clicks on add to cart button
  //we will recieve the particular product to add
  export const addItemToCart = (cartItems, productToAdd) => {
      const newCartItems = addCartItem(cartItems, productToAdd);
      console.log('from add item')
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
   }
  export const removeItemFromCart = (cartItems, productToDelete) => {
      const newCartItems = deleteCartItem(cartItems, productToDelete);
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
   }
  
  export const deleteItemFromCartButton = (cartItems, productToDelete) => {
      const newCartItems = deleteCartItemButton(cartItems, productToDelete);
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }

  export const setToggleCart = (bool) => {
      return createAction(CART_ACTION_TYPES.SET_TOGGLE_CART, bool)
  }

