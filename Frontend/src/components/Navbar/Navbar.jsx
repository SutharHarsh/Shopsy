import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWallet } from "react-icons/fa";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <nav className="bg-white  p-4 flex items-center justify-between">
      <div className="text-xl font-bold">E-commerce</div>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>
          <div className="relative">
            <button className="focus:outline-none">Products</button>
            <ul className="absolute left-0 hidden mt-2 bg-black text-white group-hover:block">
              <li><Link to="/new-products">New Products</Link></li>
              <li><Link to="/best-sellers">Best Sellers</Link></li>
              <li><Link to="/sell">Sell</Link></li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button onClick={handleOrderPopup}><FaShoppingCart /></button>
        <button onClick={handleOrderPopup}><FaWallet /></button>
      </div>
    </nav>
  );
};

export default Navbar;
