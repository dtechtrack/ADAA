# E-Commerce Website

## Overview

The E-Commerce Website is a fully functional online shopping platform designed to provide users with an intuitive and engaging shopping experience. The site features dynamic user interface elements, a wide range of products categorized for easy navigation, and robust functionalities for managing user interactions with products, including wishlist and cart features. Users can register, log in, browse products, add items to their cart and wishlist, and complete purchases seamlessly.

## Setup Instructions

To set up the project locally, follow these instructions:

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Clone the Repository

git clone https://github.com/yourusername/ecommerce-website.git
cd ecommerce-website
text

### Install Dependencies

Navigate to both the frontend and backend directories to install the required dependencies.

#### Backend Setup

1. Navigate to the backend directory:
   cd backend
   text

2. Install backend dependencies:
   npm install
   text

3. Create a .env file in the backend directory and add your environment variables:
   MONGO_URI=your_mongodb_connection_string_here
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   text

4. Start the backend server:
   npm start
   text

#### Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:
   cd frontend
   text

2. Install frontend dependencies:
   npm install
   text

3. Start the frontend development server:
   npm start
   text

### Access the Application

Once both servers are running, you can access the application by navigating to http://localhost:3000 in your web browser.

## Key Features

- _User Authentication_: Users can sign up, log in, and manage their accounts securely.
- _Dynamic Navbar_: The navbar adapts its color based on the background for optimal visibility.
- _Product Browsing_: Users can view products categorized by type (e.g., Kurta, Saree).
- _Wishlist Functionality_: Users can save products to their wishlist for future reference.
- _Cart Management_: Users can add products to their cart, adjust quantities, and proceed through a multi-step checkout process.
- _Stock Management_: Users can only add available products to their cart based on selected size and color.
- _Responsive Design_: The website is designed to be mobile-friendly for seamless use across devices.
- _Order History_: Users can view their past orders in their profile.

## Tech Stack

The following technologies were used in the development of the E-Commerce Website:

- _Frontend_:
- React
- React Router
- Styled Components
- Axios

- _Backend_:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Bcrypt (for password hashing)
- Jsonwebtoken (for authentication)

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
