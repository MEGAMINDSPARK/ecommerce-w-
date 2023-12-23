import React from 'react';

function navbar() {
  return (
    <header>
      <ul className='header'>
        <li><a href="./index.html">HOME</a></li>
        <li><a href="#">STORE</a></li>
        <li><a href="./about.html">ABOUT</a></li>
        <li><a href="#cart" className="cart-holder">cart<span className='cart-number'>0</span></a></li>
      </ul>
      <h1>The Generics</h1>
    </header>
  );
}

export default navbar;
