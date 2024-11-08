import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product = {} }) => {
    const { productId, productImage, productTitle, price } = product;

    return (
        <div className="p-4 border rounded-md shadow-sm">
      <img src={product.productImage} alt={product.productTitle} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 font-semibold">{product.productTitle}</h2>
      <p>Price: {product.price}</p>
      <Link to={`/product/${product.productId}`}>
        <button className="mt-2 p-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white">
          View Details
        </button>
      </Link>
    </div>
    );
};

export default Product;
