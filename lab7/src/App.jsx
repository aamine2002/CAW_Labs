import React, { useState } from 'react';

// Sample menu data
const menuData = {
  Pizza: [
    { id: 1, name: 'Margherita', description: 'Classic tomato and cheese', price: 10.99 },
    { id: 2, name: 'Pepperoni', description: 'Pepperoni and mozzarella', price: 12.99 }
  ],
  Sandwich: [
    { id: 3, name: 'Club Sandwich', description: 'Chicken, bacon, lettuce', price: 8.99 },
    { id: 4, name: 'Veggie Sandwich', description: 'Grilled vegetables', price: 7.99 }
  ],
  'Main Courses': [
    { id: 5, name: 'Grilled Salmon', description: 'Fresh salmon with herbs', price: 15.99 },
    { id: 6, name: 'Beef Steak', description: 'Tender beef with sides', price: 16.99 }
  ]
};

// MenuItem Component
const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-semibold">${item.price.toFixed(2)}</span>
        <button 
          onClick={() => onAddToCart(item)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// MenuDisplay Component
const MenuDisplay = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Pizza');

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        {Object.keys(menuData).map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full mb-2 p-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white border'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">{selectedCategory}</h1>
        {menuData[selectedCategory].map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 pb-2 border-b">
              <span>{item.name} x {item.quantity}</span>
              <div className="flex items-center space-x-2">
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 font-bold text-lg">Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

// Order Component
const Order = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t font-bold text-xl text-center">
        Total: ${total.toFixed(2)}
      </div>
      <button 
        className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Confirm Order
      </button>
    </div>
  );
};

// App Component
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCartItems([]);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">Restaurant Menu</h1>
      
      {!orderPlaced ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:pr-4">
            <MenuDisplay onAddToCart={addToCart} />
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <Cart 
              cartItems={cartItems} 
              onRemoveItem={removeFromCart} 
            />
            {cartItems.length > 0 && (
              <button 
                onClick={placeOrder} 
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Place Order
              </button>
            )}
          </div>
        </div>
      ) : (
        <Order cartItems={cartItems} />
      )}
    </div>
  );
};

export default App;