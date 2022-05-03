import { createContext, useState, } from "react";

 export const CartContext = createContext({
    itemCount: 0,
    setItemCount: () => {},
    toggleCart: false,
    setToggleCart: () => {}
});

 export const CartProvider = ({children}) => {
     const [itemCount, setItemCount] = useState(0);
     const [toggleCart, setToggleCart] = useState(false);
     const value = {itemCount, setItemCount, toggleCart, setToggleCart}
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};