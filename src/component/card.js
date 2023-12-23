import React from 'react';
import img1 from '../img/Album 1.png'
import img2 from '../img/Album 2.png'
import img3 from '../img/Album 3.png'
import img4 from '../img/Album 4.png'
import img5 from '../img/Cofee.png'
import img6 from '../img/Shirt.png'

function Card() {
  return (
    <div>
    <section id="music" class="container">
          <h2>MUSIC</h2>
          <div id ="music-content">
              <div id='album1'>
                  <h3>Album 1</h3>
                  <div class="image-container">
                      <img class="prod-images" src= {img1} alt="abc"/>
                  </div>
                                  <div class="prod-details">
                      <span>$<span>12.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
              <div id='album2'>
                  <h3>Album 2</h3>
                  <div class="image-container">
                      <img class="prod-images" src={img2} alt=""/>
                  </div>
                                  <div class="prod-details">
                      <span>$<span>14.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
              <div id='album3'>
                  <h3>Album 3</h3>
                  <div class="image-container">
                      <img class="prod-images" src= {img3} alt=""/>
                  </div>
                                  <div class="prod-details">
                      <span>$<span>9.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
              <div id='album4'>
                  <h3>Album 4</h3>
                  <div class="image-container">
                      <img class="prod-images"src= {img4} alt=""/>
                  </div>
                                  <div class="prod-details">
                      <span>$<span>19.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
          </div>

      </section>
      <section id="merch" class="container">
          <h2>MERCH</h2>
          <div id="merch-content">
              <div id="t-shirt">
                  <h3>T-Shirt</h3>
                  <div class="image-container">
                      <img class="prod-images"src= {img6} alt=""/>
                  </div>
                              <div class="prod-details">
                      <span>$<span>19.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
              <div id="coffee-cup">
                  <h3>Coffee Cup</h3>
                  <div class="image-container">
                      <img class="prod-images" src= {img5} alt=""/>
                  </div>
                              <div class="prod-details">
                      <span>$<span>6.99</span></span>
                      <button class="shop-item-button" type='button'>ADD TO CART</button>
                  </div>
              </div>
          </div>
          </section>
  </div>
  );
}

export default Card;
