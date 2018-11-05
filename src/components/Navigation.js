import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="Header">
        
        <h1>Lambda Services</h1>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="/login"></a>
        </div>
        <div>
          <a href="/cart">Contact</a>
        </div>
      </div>
    </div>
  );
};


