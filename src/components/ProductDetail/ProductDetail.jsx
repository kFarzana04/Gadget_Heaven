import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/productsData.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.product_id === parseInt(productId)
        );
        setProduct(selectedProduct);
      });
  }, [productId]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("storage"));

    toast.success(`${product.product_title} added to cart!`);
  };

  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Dispatch custom event to notify Navbar
    window.dispatchEvent(new Event("storage"));

    // Show toast notification
    toast.info(`${product.product_title} added to wishlist!`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-center mb-4">Product Details</h1>
      <div className="bg-purple-100 rounded-lg p-6 shadow-md">
        <div className="flex gap-6">
          <div className="w-1/2 bg-gray-200 rounded-md flex items-center justify-center">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="rounded-md"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">{product.product_title}</h2>
            <p className="text-lg text-gray-700">Price: ${product.price}</p>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Specifications:</h3>
              <ul className="list-disc ml-5 text-gray-600">
                {product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-yellow-500">Rating: {product.rating} ⭐</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={addToCart}
                className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Add to Cart 🛒
              </button>
              <button
                onClick={addToWishlist}
                className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Add to Wishlist ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
