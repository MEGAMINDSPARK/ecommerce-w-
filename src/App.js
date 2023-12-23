import React from 'react';
import './component/style.css';
import Card from './component/card' 
import Footer from './component/Footer';
import { CartProvider } from './component/cartcontext';
import Navbar from './component/navbar';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Card />
        <Footer />
        <cart/>
      </div>
    </CartProvider>
  );
}

export default App;
