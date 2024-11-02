// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Cart from './Cart';
import AddItem from './AddItem';
import Signup from './Signup';
import Login from './Login';
import { UserProvider } from './UserContext';
import Footer from './Footer';

const App = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([
        { id: 1, name: 'Camera', price: 1, image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'  },
        { id: 2, name: 'Book', price: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjIqz9iR2KaWzREOA0SzPl47cz1nRlzW_AQ&s'  },
        { id: 3, name: 'Bottle', price: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_jR78l7MhwTahWy9j0OJPrark3SCA9VNhA&s' },
        // More items can be added here
    ]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.name} added to cart!`);
    };

    const removeFromCart = (itemToRemove) => {
        setCart(cart.filter(item => item.id !== itemToRemove.id));
    };

    const addItem = (newItem) => {
        setItems([...items, newItem]);
        alert(`${newItem.name} added to the store!`);
    };

    return (
        <UserProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route 
                        path="/" 
                        element={<ItemList items={items} addToCart={addToCart} />} 
                    />
                    <Route 
                        path="/cart" 
                        element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} 
                    />
                    <Route 
                        path="/add-item" 
                        element={<AddItem addItem={addItem} />} 
                    />
                    <Route 
                        path="/signup" 
                        element={<Signup />} 
                    />
                    <Route 
                        path="/login" 
                        element={<Login />} 
                    />
                    <Route 
    path="/cart" 
    element={<Cart cartItems={cart} removeFromCart={removeFromCart} setCart={setCart} />} 
/>


                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
