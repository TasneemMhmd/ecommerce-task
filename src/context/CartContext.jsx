import { useEffect, useMemo, useState } from "react";
import { CartContext } from "../hooks/useCart";

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const SHIPPING = 5;

    const subtotal = useMemo(() =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [cartItems]
    );
    const total = useMemo(() => subtotal + SHIPPING, [subtotal]);
    const itemsCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (product) => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
        setCartItems((cart) => {
            if (cart.find(item => item.id === product.id)) {
                return cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...cart, { ...product, quantity: 1 }];
        });
    }
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return deleteItem(id);
        setCartItems((cart) => cart.map((item) => item.id === id ? { ...item, quantity: quantity } : item));
    }

    const deleteItem = (id) => {
        setCartItems((cart) => cart.filter((item) => item.id !== id));
    }
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    return (
        <CartContext.Provider value={{
            cartItems,
            total,
            subtotal,
            itemsCount,
            loading,
            cartOpen,
            addItem,
            updateQuantity,
            deleteItem,
            toggleCart
        }}
        >
            {children}
        </CartContext.Provider>
    );
}
