import React from 'react';
import { useNavigate } from 'react-router-dom';

import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    const Navigate = useNavigate();
    const handleShopNowClick = () => {
        navigate("/dashboard"); 
      };
    return (
        <div className="relative bg-[#9538E2] py-8">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-5xl font-bold my-6">
            Upgrade Your Tech Accessorize with  <br /><span className="text-white">Gadget Heaven Accessories</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button
            onClick={handleShopNowClick}
            className="bg-white text-purple-700 px-8 py-3 mt-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </button>
        </div>
  
        <div className="flex justify-center mt">
          <div className="relative">
            <img
              src={bannerImg}
              alt="Tech Accessory"
              className="rounded-lg shadow-lg max-w-2xl transform translate-y-1/4"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;