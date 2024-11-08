import React, { useState } from 'react';
import SidebarFilter from './SidebarFilter';
import Product from '../Product/Product';

// Sample categories for the sidebar
const categories = ["All Products", "Laptops", "Mobiles", "Earbuds"];

const App = () => {
    const [activeCategory, setActiveCategory] = useState("All Products");

    // Sample product data, this would come from an API or state
    const products = [
        // Add your product data here or fetch from an API
    ];

    // Filter products based on the active category
    const filteredProducts = activeCategory === "All Products"
        ? products
        : products.filter(product => product.category === activeCategory.toLowerCase());

    return (
        <div className="flex">
            <SidebarFilter 
                categories={categories} 
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />
            <div className="grid grid-cols-1 gap-4 p-4">
                {filteredProducts.map(product => (
                    <Product key={product.productId} product={product} />
                ))}
            </div>
        </div>
    );
};

export default App;
