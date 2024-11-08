import React from 'react';

const SidebarFilter = ({ activeCategory, onSelectCategory }) => {
    // Define the categories
    const categories = ["All Product", "Laptops", "Smart Phone", "Earbuds"];

    return (
        <div className="w-64 h-96 bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => onSelectCategory(category)}
                            className={`border-2 border-purple-950 mt-6 block w-full text-left p-2 rounded hover:bg-gray-300 ${activeCategory === category ? 'bg-purple-500 text-white' : 'text-gray-700'}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarFilter;
