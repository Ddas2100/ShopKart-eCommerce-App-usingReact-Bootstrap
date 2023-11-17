import React from 'react';
import Card from '../UI/Card';
import './AvailableProducts.css';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    }, 
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];

const AvailableProducts = () => {
    return (
      <Card>  
        <div className="available-products">
        <h2>Available Products</h2>
        <div className="product-container">
          {productsArr.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.title}</h3>
              <img src={product.imageUrl} alt={product.title} />
              <div className="product-info">
                <p>${product.price}</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Card>
    );
}

export default AvailableProducts;
    
    