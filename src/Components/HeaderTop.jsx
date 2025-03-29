import React, { useState } from "react";
import { FaShippingFast, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTop = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative bg-black text-white h-11 text-md px-6 py-0 flex justify-center items-center flex-wrap overflow-visible z-40">
      {/* Left Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-4 flex-wrap">
        {/* Free Shipping */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("shipping")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaShippingFast size={14} />
          <span>Free Shipping</span>
          {hoveredItem === "shipping" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-sm rounded-md shadow-lg p-2 w-48 text-center z-50">
              Enjoy free shipping on all orders above $50!
            </div>
          )}
        </div>

        {/* Click and Collect */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("collect")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaCalendarAlt size={14} />
          <span>Click and Collect</span>
          {hoveredItem === "collect" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-48 text-center z-50">
              Order online and collect from your nearest store!
            </div>
          )}
        </div>

        {/* Warranty */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("warranty")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span>Track Order</span>
          {hoveredItem === "warranty" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-3 w-48 text-center z-50">
             Track Your Order with simply entering the order id or referce id.
            </div>
          )}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4 relative ml-auto">
        {/* B2B Dropdown (Hide on smaller screens) */}
        <div
          className="hidden sm:relative cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("b2b")}
          onMouseLeave={() => setHoveredItem(null)}
        >
         Sample Kit ⌄
          {hoveredItem === "b2b" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-40 text-center z-50">
              <p className="px-4 py-1 hover:bg-gray-700 transition">Custom Designs</p>
              <p className="px-4 py-1 hover:bg-gray-700 transition">Consulting Services</p>
            </div>
          )}
        </div>

        {/* Deliver to Area Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-0.5 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("area")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaMapMarkerAlt size={14} />
          <span>Deliver to Area ⌄</span>
          {hoveredItem === "area" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-36 text-center z-50">
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">New Delhi</p>
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">Uttar Pradesh</p>
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">Mumbai</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-2 md:gap-3 flex-nowrap">
        <div className="cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
          Store Locator
        </div>
        <div className="cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
          Help
        </div>
        <a href="/sell-with-us" className="hidden bg-[#fa8038] !text-white lg:block cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
            Business Solutions
        </a>

      </div>
    </div>
  );
};

export default HeaderTop;
