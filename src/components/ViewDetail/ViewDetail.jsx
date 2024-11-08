import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetail = () => {
    const { productId } = useParams(); // Accessing productId from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details from API or static data
        fetch(`/productsData.json`) // Example endpoint
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(item => item.productId === parseInt(productId));
                setProduct(selectedProduct);
            });
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="hero bg-base-200 min-h-screen mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='mb-12'>
                <h1 className='text-3xl font-bold'>{product.productTitle}</h1>
                <img className='w-80 h-52' src={product.productImage} alt={product.productTitle} />
                <p>{product.description}</p>
                <p className='text-lg font-semibold'>Price: {product.price}</p>
            </div>
          </div>
        </div>
        
    );
};

export default ViewDetail;
