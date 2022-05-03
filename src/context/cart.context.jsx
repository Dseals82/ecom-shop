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
}

 export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    toggleCart: false,
    setToggleCart: () => {},
    cartCount: 0,
});

 export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])

    //triggers whenever user clicks on add to cart button
    //we will recieve the particular product to add
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
     }
     const value = {cartItems, setCartItems, toggleCart, setToggleCart, addItemToCart, cartCount};
    
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};