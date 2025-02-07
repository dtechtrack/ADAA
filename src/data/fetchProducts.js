// src/fetchProducts.js
import axios from 'axios';

const API_URL = 'https://dhairya-server-m2he.onrender.com/api/products'; // Update with your actual API URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Return the fetched products
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw the error to handle it later if needed
    }
};
