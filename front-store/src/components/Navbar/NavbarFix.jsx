import React, { useState, useEffect } from 'react';
// import { GoChevronDown } from "react-icons/go";

const NavbarFix = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isSticky ? 'sticky top-0 z-30' : ''}`}>
      <div className="py-3 mb-4 border-t border-b border-gray-500  backdrop-blur-lg bg-white relative z-30">
        <div className="container mx-auto flex justify-center relative"> 
          <nav className="flex gap-20">
            <a href="#" className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2 ">Test</a>
            <a href="#" className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2 ">consectetur</a>
            <a href="#" className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2 ">sitamet</a>
            <a href="#" className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2 ">dolorolor</a>
            <div className="relative group">
              <button className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2  focus:outline-none">
                Category ∨  
              </button>
              <div className="absolute hidden group-hover:block bg-gray-100 text-gray-700 rounded-md mt-1 border border-gray-300 ">
                <a href="#" className="block font-light px-4 py-2 hover:bg-gray-200 cursor-pointer">Lorem</a>
                <a href="#" className="block font-light px-4 py-2 hover:bg-gray-200 cursor-pointer">ipsum</a>
                <a href="#" className="block font-light px-4 py-2 hover:bg-gray-200 cursor-pointer">consectetur</a>
                <a href="#" className="block font-light px-4 py-2 hover:bg-gray-200 cursor-pointer">adipisicing</a>
                <a href="#" className="block font-light px-4 py-2 hover:bg-gray-200 cursor-pointer">eliIste</a>
              </div>
            </div>
            <a href="#" className="font-semibold font-light text-gray-500 hover:text-black px-3 py-2 ">Products</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarFix;
