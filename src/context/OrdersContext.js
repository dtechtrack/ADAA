// src/context/OrdersContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  // Initialize state with orders from local storage
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : []; // Parse stored orders or return an empty array
  });

  // Effect to save orders to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders)); // Save orders to local storage
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]); // Add new order to state
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
