// src/Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, setCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handlePayment = () => {
        const upiAddress = "adhensara@oksbi"; // UPI address
        alert(` Please pay using the following UPI address: ${upiAddress}`);
        setCart([]); // Clear the cart after payment
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price.toFixed(2)}
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handlePayment} className="pay-button">
                        Pay Now
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
