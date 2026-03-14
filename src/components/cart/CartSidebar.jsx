import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import Loader from "../ui/Loader";
import IconBtn from "../ui/IconBtn";
import { Link } from "react-router-dom";

function CartSidebar() {
    const { cartOpen, toggleCart, cartItems, updateQuantity, deleteItem, subtotal, total, loading } = useCart();

    return (
        <section className="cart-sidebar ">
            {cartOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                    onClick={toggleCart}
                />
            )}
            <div className={`container fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-50 flex flex-col shadow-xl transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <p className="font-semibold text-text text-2xl leading-9 tracking-[-0.5px]">Cart</p>
                    <IconBtn onClick={toggleCart} icon={<X size={20} />} />
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                    {cartItems.length === 0 ? (
                        <p className="text-textLight2 font-normal text-sm leading-[25.2px] text-center mt-10">
                            The cart is empty
                        </p>
                    ) : loading ? (
                        <Loader />
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain bg-badge"
                                />
                                <div className="flex-1 flex flex-col gap-1">
                                    <p className="font-medium text-sm leading-[21px] text-text line-clamp-1">
                                        {item.title}
                                    </p>
                                    <div className="w-fit px-2 flex items-center border border-text rounded overflow-hidden">
                                        <IconBtn icon={<Minus size={8} />} onClick={() => updateQuantity(item.id, item.quantity - 1)} />
                                        <span className="w-6 h-6 flex items-center justify-center text-[13px] font-medium text-text">
                                            {item.quantity}
                                        </span>
                                        <IconBtn icon={<Plus size={8} />} onClick={() => updateQuantity(item.id, item.quantity + 1)} />

                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <p className="font-semibold text-sm text-text">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <IconBtn onClick={() => deleteItem(item.id)} icon={<X size={14} />} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="px-6 py-5 border-t flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <p className="font-normal text-sm text-textLight2">Subtotal</p>
                        <p className="font-medium text-sm text-text">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-base text-text">Total</p>
                        <p className="font-bold text-base text-text">${total.toFixed(2)}</p>
                    </div>
                    <Link to="/checkout">
                        <button
                            disabled={cartItems.length === 0}
                            className="w-full h-[44px] bg-text text-white hover:bg-white hover:text-text hover:border hover:border-text rounded-[4px] font-medium text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed mt-2"                    >
                            Checkout
                        </button></Link>
                    <Link to="/cart"
                        className={`w-full h-[44px] underline font-medium text-sm flex items-center justify-center`}
                    >
                        View Cart
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CartSidebar;