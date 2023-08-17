import './ProductCard.css';
import React from 'react';

const ProductCard = ({ product = {} }) => { 
  const { id, title, description,discountPercentage, thumbnail , price,rating,stock,brand,category} = product;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>ID: {id}</p>
      <p>Description: {description}</p>
      <p>Discount Percentage: {discountPercentage} %</p>
      <p>Price: {price} EGP</p>
      {/* <p>Rating: {rating} /5</p>
      <p>Stock: {stock}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p> */}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;