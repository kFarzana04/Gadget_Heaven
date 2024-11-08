import React, { useState, useEffect } from "react";

import SidebarFilter from "../SidebarFilter/SidebarFilter";

import Banner from "../Banner/Banner";
import Product from "../Product/Product";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/productsData.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });

    
    fetch("/categoriesData.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      
      <Banner></Banner>

      <div className="flex gap-4 mt-40">
        <SidebarFilter
          categories={categories}
          onSelectCategory={handleCategorySelect}
        />
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.productId} product={product} ></Product>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              There is no data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
