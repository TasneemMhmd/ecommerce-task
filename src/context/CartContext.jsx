import { useEffect, useMemo, useState } from "react";
import { CartContext } from "./useCart";

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([() => {
        return JSON.parse(localStorage.getItem("cart")) || [];}
    ]);

    const total = useMemo(() => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) , [cartItems]);
    const itemsCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (product) => {
        setCartItems((cart) =>{
            if(cart.find(item => item.id === product.id)){
                return cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...cart, {...product, quantity: 1}];
        });
    }
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return deleteItem(id);
        setCartItems((cart) => cart.map((item) => item.id === id ? {...item, quantity: quantity} : item));
    }

    const deleteItem = (id) => {
        setCartItems((cart) => cart.filter((item) => item.id !== id));
    }
    const clearCart = () => {
        setCartItems([]);
    }
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    return (
        <CartContext.Provider value={{
            cartItems,
            total,
            itemsCount,
            addItem,
            updateQuantity,
            deleteItem,
            clearCart,
            toggleCart,
            cartOpen
        }}
        >
            {children}
        </CartContext.Provider>
    );
}
