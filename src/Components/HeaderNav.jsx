import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { QuestionAnswer } from "@mui/icons-material";



const HeaderNav = () => {
  // useAutoTranslate(); 
  return (
    <>
      <header className="py-2 bg-white shadow-md w-full">
        <div className="px-2 sm:px-6 md:px-4 flex items-center justify-between flex-wrap">
          {/* Left section - Hamburger and Logo */}
          <div className="flex items-center flex-1 md:flex-none">
          

            {/* Logo */}
            <div className="flex justify-center flex-grow lg:flex-grow-0">
              <div className="w-36 sm:w-40 h-20 sm:h-22 mr-6">
                <img 
                  src="/Images/Printo.webp" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Middle section - Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
            <div className="relative w-full">
              <input
                className="h-10 w-full bg-white rounded-md pl-10 pr-4 outline-none border border-[#662d91] shadow-sm hover:text-[#662D91]"
                placeholder="What do you want?" // Translation applied here
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#662D91]" size={20} />
            </div>
          </div>

          {/* Right section - Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#662D91] hover:border-2 rounded-md border-[#662d91] px-2 py-1 text-gray-400" href="/acrylic">
            <QuestionAnswer className="hover:text-[#662D91]"/>  {/* Chat bubbles */}  Help Centre
            </a>
            
            

            {/* Desktop User Icons */}
            <a className="flex items-center text-base xl:text-lg hover:text-[#662D91] text-gray-400" href="/signin">
              <div className="w-6 h-6 rounded-full border border-[#662D91] flex items-center justify-center text-sm ">
                S
              </div>
              <span className="ml-2 hover:text-[#662D91] ">"Sign Up / Sign In"</span>
            </a>
            <a href="/wishlist">
              <CiHeart size={24} className="cursor-pointer hover:text-[#662D91] text-gray-400" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={24} className="cursor-pointer hover:text-[#662D91]" />
            </a>

            {/* Desktop Language Selector */}
            <div className="relative">
              <CiGlobe size={22} className="cursor-pointer hover:text-[#662D91]" 
               
              />
    
            </div>
          </div>

          {/* Mobile & Tablet Icons */}
          <div className="flex lg:hidden flex-nowrap items-center space-x-3 sm:space-x-2">
            <a href="/wishlist">
              <CiHeart size={22} className="cursor-pointer hover:text-[#662D91]" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={22} className="cursor-pointer hover:text-[#662D91]" />
            </a>

            {/* Mobile Language Selector */}
            <div className="relative text-black">
              <CiGlobe
                size={22}
                className="cursor-pointer hover:text-[#662D91]"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              />
       

            </div>
          </div>

        
<div className="w-full px-4 sm:px-6 py-2 md:hidden">
  <div className="relative w-full">
    <input 
      className="h-10 w-full bg-white rounded-md pl-10 pr-4 border border-gray-300 shadow-sm hover:text-[#662D91] placeholder-gray-600" 
      placeholder="What do you want?"
    />
    <FaSearch 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#662D91]" 
      size={20} 
    />
  </div>
</div>

        </div>
      </header>

 

    </>
  );
};

export default HeaderNav;
