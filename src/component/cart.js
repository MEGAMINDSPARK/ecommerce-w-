import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const handlePurchase = () => {
    clearCart();
    alert('Thank you for your purchase!');
  };

  return (
    <section id="cart" className="container">
<h2>CART</h2>
      <button className="cancel">X</button>
      <div className="cart-row cart-header">
        <span className='cart-item cart-column'>ITEM</span>
        <span className='cart-price cart-column'>PRICE</span>
        <span className='cart-quantity cart-column'>QUANTITY</span>
      </div>
      <div className='cart-items'>
        {cartItems.map((item, index) => (
          <div key={index} className='cart-row'>
            <span className='cart-item cart-column'>{item.name}</span>
            <span className='cart-price cart-column'>${item.price}</span>
            <span className='cart-quantity cart-column'>1</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>
          <span className='total-title'><strong>Total</strong></span>
          $<span id='total-value'>{totalPrice}</span>
        </span>
      </div>
      <button className='purchase-btn' type='button' onClick={handlePurchase}>
        PURCHASE
      </button>
      <div>
        <button className="cart-btn-bottom" onClick={() => addToCart('Example Item', 10)}>
          Add to Cart
        </button>
      </div>    </section>
  );
}

export default Cart;
