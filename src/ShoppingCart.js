// ShoppingCart.js
import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItemToCart = () => {
    if (itemName) {
      setCartItems([...cartItems, itemName]);
      setItemName('');
    }
  };

  const removeItemFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div style={styles.container}>
      <h1>Shopping Cart</h1>
      <input 
        style={styles.input}
        type="text" 
        value={itemName} 
        onChange={(e) => setItemName(e.target.value)} 
        placeholder="Add item" 
      />
      <button style={styles.button} onClick={addItemToCart}>Add to Cart</button>
      
      <ul style={styles.list}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item} <button style={styles.removeButton} onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Total Items: {cartItems.length}</h2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    margin: '10px',
    width: '200px',
  },
  button: {
    padding: '10px 15px',
    margin: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '5px 0',
  },
  removeButton: {
    marginLeft: '10px',
    padding: '5px',
  },
};

export default ShoppingCart;
