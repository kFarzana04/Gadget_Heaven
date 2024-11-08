import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [view, setView] = useState("cart");
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(view)) || [];
    setItems(data);
    if (view === "cart") calculateTotalCost(data);
  }, [view]);
  

  const calculateTotalCost = (items) => {
    const total = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalCost(total.toFixed(2));
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem(view, JSON.stringify(updatedItems));
    if (view === "cart") calculateTotalCost(updatedItems);
  };

  const handleSortByPrice = (ascending) => {
    const sortedItems = [...items].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setItems(sortedItems);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };
    return (
        <div className="max-w-6xl mx-auto p-4">
        <div className="bg-[#9538E2] rounded-lg p-6 shadow-md text-center">
          <h1 className="text-3xl font-bold mb-2 text-white">Dashboard</h1>
          <p className="text-white mb-4">
            Explore the latest gadgets that will take your experience to the next
            level. <br /> From smart devices to the coolest accessories, we have it all!
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setView("cart")}
              className={`py-2 px-6 rounded-3xl border-2 border-white${
                view === "cart"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setView("wishlist")}
              className={`py-2 px-6 rounded-3xl border-2 border-white ${
                view === "wishlist"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
  
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-2xl font-semibold">
            {view === "cart" ? "Cart" : "Wishlist"}
          </h2>
          {view === "cart" && (
            <p className="text-xl font-semibold">Total cost: ${totalCost}</p>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => handleSortByPrice(true)}
              className="bg-gray-200 py-1 px-3 rounded hover:bg-gray-300"
            >
              Sort by Price ↑
            </button>
            <button
              onClick={() => handleSortByPrice(false)}
              className="bg-gray-200 py-1 px-3 rounded hover:bg-gray-300"
            >
              Sort by Price ↓
            </button>
            {view === "cart" && (
              <button
                onClick={handlePurchase}
                className="bg-purple-700 text-white py-1 px-4 rounded hover:bg-purple-400"
              >
                Purchase
              </button>
            )}
          </div>
        </div>
  
        <div className="mt-4 grid gap-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 rounded-md w-20 h-20 flex items-center justify-center">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.product_title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="font-semibold">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-600 text-xl font-bold"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-8">
              {view === "cart"
                ? "Your cart is empty."
                : "Your wishlist is empty."}
            </p>
          )}
        </div>
  
        {/* Purchase Success Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
              <div className="text-green-500 text-4xl mb-4">✔️</div>
              <h2 className="text-2xl font-semibold mb-2">Payment Successful</h2>
              <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
              <p className="font-semibold text-lg mb-4">Total: ${totalCost}</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default Dashboard;