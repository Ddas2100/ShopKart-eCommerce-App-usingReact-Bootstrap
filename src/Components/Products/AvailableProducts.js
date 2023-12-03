import React from 'react';
import './AvailableProducts.css';
import ProductItem from './ProductItem'; 

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
    const productsList = productsArr.map((product) =>
        <ProductItem
            id={product.id} 
            key={product.id}  
            title={product.title} 
            imageUrl={product.imageUrl} 
            price={product.price}
        />)
    return (
        <section className='products'>
            <ul>
                {productsList}
            </ul>
        </section>
    );
};

export default AvailableProducts;
