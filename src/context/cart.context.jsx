import { createContext, useEffect, useState, } from "react";
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

 export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    deleteCartItem: () => {},
    toggleCart: false,
    setToggleCart: () => {},
    cartCount: 0,
    deleteItemFromCartButton: () => {},
    cartTotal:0,
});

 export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems]);
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    //triggers whenever user clicks on add to cart button
    //we will recieve the particular product to add
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
     }
    const removeItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
     }
    
    const deleteItemFromCartButton = (productToDelete) => {
        setCartItems(deleteCartItemButton(cartItems, productToDelete))
    }
     const value = {cartItems, setCartItems, toggleCart, setToggleCart, addItemToCart, removeItemFromCart, cartCount, deleteItemFromCartButton, cartTotal};
    
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};