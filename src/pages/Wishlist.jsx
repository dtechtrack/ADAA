import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/productsData";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
  };

  const [wishList , setWishList] = useState([])

  const imageStyle = {
    width: "300px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "16px",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const detailsStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "left", // Aligns text to the left
  };

  const actionsStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  };

  const buttonStyle = {
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  useEffect(()=>{
    const fetchData = async()=>{
      const userString = localStorage.getItem("user");

      const userObject = JSON.parse(userString);
      
      const id = userObject.id;
      const response = await axios.post('http://localhost:5000/api/getWishList',{id} )
      const wishListProducts = response.data.products
                .map((wishListItem) => {
                  const productDetails = products.find((product) => product.id === wishListItem.productId);
                  return productDetails ? { ...productDetails, quantity: wishListItem.quantity } : null;
                })
                .filter((item) => item !== null);
      
                setWishList(wishListProducts);
    }
    fetchData()
  },[])

  const remove = async(productId)=>{
    try{
    const userString = localStorage.getItem("user");

const userObject = JSON.parse(userString);

const id = userObject.id;
      const response= await axios.post('http://localhost:5000/api/addToWishList', {id,productId})
      console.log(response)
      
      if(response.added){
        alert('product added to wishlist')
      }
      else{
        alert('product remove from wishlist')
        const userString = localStorage.getItem("user");

      const userObject = JSON.parse(userString);
      
      const id = userObject.id;
      const response = await axios.post('http://localhost:5000/api/getWishList',{id} )
      const wishListProducts = response.data.products
                .map((wishListItem) => {
                  const productDetails = products.find((product) => product.id === wishListItem.productId);
                  return productDetails ? { ...productDetails, quantity: wishListItem.quantity } : null;
                })
                .filter((item) => item !== null);
      
                setWishList(wishListProducts);

      }}
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishList.length > 0 ? (
        <div className="wishlist-items">
          {wishList.map((item) => (
            <div className="wishlist-card" key={item.id} style={cardStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              <div style={detailsStyle}>
                <p style={{ fontWeight: "bold", fontSize: "22px", textAlign : "left", marginLeft: "20px", marginTop: "-15%" }}>{item.name}</p>
                <p style={{ textAlign: "left", marginLeft: "20px",marginTop: "10px" }}>Price: ${item.originalPrice}</p>
                <div style={actionsStyle}>
                  <Link to={`/products/${item.id}`}>
                    <button style={{ ...buttonStyle, backgroundColor: "#000", color: "#fff", marginTop: "10px", marginLeft: "20px" }}>View Details</button>
                  </Link>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "#fff", marginTop: "10px" }}
                    onClick={() => remove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty. Start adding your favorite items!</p>
      )}
    </div>
  );
};

export default Wishlist;
