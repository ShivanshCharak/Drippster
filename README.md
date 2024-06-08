# Drippster

## Description
Ecommerce App which is calling a external api and pulling the data regarding the products

This project is a full-stack e-commerce application that allows users to browse products, add them to their cart, and complete purchases through an integrated payment system. The frontend is built with React and uses Redux for state management, React Toastify for notifications, and Stripe for payment processing. The backend is powered by Express.js and uses MongoDB and Mongoose for database management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Features](#features)

## Installation
### Prerequisites
- Node.js
- MongoDB
- Stripe account

### Backend
1. Clone the repository
    ```bash
   git clone https://github.com/ShivanshCharak/Drippster
    ```
2. Navigate to the backend directory
    ```bash
    cd backend
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Set up environment variables in a `.env` file
    ```env
    PORT=8000
    MONGO_URI=your_mongo_uri
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

5. Start the backend server
    ```bash
    npm start
    ```

### Frontend
1. Navigate to the frontend directory
    ```bash
    cd frontend
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Set up environment variables in a `.env` file
    ```env
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    BACKEND_URL=http://localhost:5000
    ```

4. Start the frontend development server
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Browse products, add them to your cart, and proceed to checkout.

## Tech Stack
### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Redux**: It is used to work with products, which will help the code to find the price and the product has been added to the cart.
- **React Toastify**: A library for displaying notifications in your React app.
- **Stripe**: A technology company that builds economic infrastructure for the internet, used here for payment processing.

### Backend
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database program, using JSON-like documents with optional schemas.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Stripe**: Used for handling payments on the backend as well.

## Features
- User authentication and authorization.
- Product listing and details.
- Shopping cart and checkout process.
- Payment processing with Stripe.