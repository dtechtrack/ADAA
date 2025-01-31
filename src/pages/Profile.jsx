// Profile.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 600px;
  margin: 50px auto 0; 
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: center;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(150, 50, 50);
  color: #ffffff;
  font-family: "Cinzel", serif;
  font-size: 2rem;
  font-weight: bold;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  text-transform: uppercase;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Cinzel", serif;
  color: #333;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    color: #666;
  }

  .edit-icon {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  a,
  button {
    text-decoration: none;
    font-family: "Cinzel", serif;
    font-size: 1rem;
    color: #fff;
    background-color:rgb(150, 50, 50);;
    padding: 0.8rem 1rem;
    text-align: center;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #444; 
    }

    border:none; // Ensure buttons have no border
    cursor:pointer; // Ensure buttons have pointer cursor
}
`;

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({ name: storedUser.username, email: storedUser.email });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const getInitials = (name) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  // Handle logout
  const handleLogoutClick = () => {
    navigate("/login");
  
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");
    localStorage.removeItem("wishlist");
  
    setUser({ name: "", email: "" }); // Ensure user is never null
    console.log("User logged out and local storage cleared.");
  };
  

  return (
    <ProfileContainer>
      <AvatarSection>
      <Avatar>{user?.name ? getInitials(user.name) : "?"}</Avatar>
<UserInfo>
  <h2>{user?.name || "Guest"}</h2>
  <p>{user?.email || "No email provided"}</p>
</UserInfo>

      </AvatarSection>
      <NavigationButtons>
        <Link to="/orders">My Orders</Link>
        <Link to="/customer-care">Customer Care</Link>
        <button onClick={handleLogoutClick}>Logout</button>
      </NavigationButtons>
    </ProfileContainer>
  );
};

export default Profile;