import React, { useState, useEffect } from 'react';
import SidebarFilter from './SidebarFilter';
import Product from '..Product/Product';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        fetch('./productsData.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data); // Initially show all products
            });
    }, []);

    const handleSelectCategory = (category) => {
        setActiveCategory(category); // Update active category
        if (category === 'All') {
            setFilteredProducts(products); // Show all products
        } else {
            setFilteredProducts(products.filter((product) => product.category === category.toLowerCase()));
        }
    };

    return (
        <div className="flex">
            <SidebarFilter
                categories={['All', 'laptops', 'mobiles', 'earpods', 'earbuds', 'earphones']}
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
            />
            <div className="flex-1 p-4">
                {/* Render filtered products */}
                {filteredProducts.map((product) => (
                    <Product key={product.productId} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
