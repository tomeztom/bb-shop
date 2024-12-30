# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---

# Botanical Bliss E-Commerce Application

## Overview
Botanical Bliss is a React-based e-commerce application that allows users to browse and purchase various plants. The application utilizes Redux Toolkit for state management, providing a robust and scalable solution for managing the shopping cart.

## Features
- **Product Listing**: Users can view a list of available plants with details such as name, price, and image.
- **Shopping Cart**: Users can add items to their cart, adjust quantities, and remove items.
- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.

## Technologies Used
- React
- Redux Toolkit
- React Router
- SCSS for styling

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v21 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tomeztom/bb-shop.git
   cd bb-shop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## File Structure

```
/botanical-bliss
│
├── /public               # Static files including index.html
│
├── /src                  # Source files for the application
│   ├── /Components       # Reusable components (Header, Card, CartItem)
│   ├── App.jsx           # Main application component with routing
│   ├── store.js          # Redux store configuration
│   ├── cartSlice.js      # Redux slice for cart management
│   ├── index.js          # Entry point of the application
│   └── styles.scss       # Global styles for the application
│
└── package.json          # Project metadata and dependencies
```

## Components Overview

### 1. App.jsx
The main component that sets up routing using React Router and provides the overall structure of the application.

### 2. Header.jsx
Displays the navigation links and the current count of items in the shopping cart.

### 3. ProductList.jsx
Renders a list of products (plants) available for purchase. It uses the `Card` component to display each product's details.

### 4. Card.jsx
Represents a single product card that shows product information and allows users to add it to their cart.

### 5. CartPage.jsx
Displays all items currently in the shopping cart, allowing users to adjust quantities or remove items.

### 6. CartItem.jsx
Represents a single item in the shopping cart, providing controls for quantity adjustment and removal.

### 7. cartSlice.js
Defines the Redux slice that manages cart state, including actions to add, remove, and update items in the cart.

### 8. store.js
Configures the Redux store that holds the application's global state.

## Usage

- **Adding Items to Cart**: Click on "Add to Cart" on any product card.
- **Viewing Cart**: Click on the cart icon in the header to view your selected items.
- **Adjusting Quantities**: In the cart page, you can increase or decrease item quantities or remove them entirely.



