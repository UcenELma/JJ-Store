import React from "react";
import img1 from "../../../../../IMG/hero/jwl5.png";
import img2 from "../../../../../IMG/hero/jwl5.png";
import img3 from "../../../../../IMG/hero/jwl5.png";

const categories = [
  {
    img: img1,
    title: "Ring",
    description: "Detail is not an obsession, it is the very essence of perfection.",
  },
  {
    img: img2,
    title: "Ring",
    description: "Detail is not an obsession, it is the very essence of perfection.",
  },
  {
    img: img3,
    title: "Ring",
    description: "Detail is not an obsession, it is the very essence of perfection.",
  },
];

const Category = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative w-70 p-7 overflow-hidden bg-gray-700 shadow-lg rounded-xl">
              <img alt="cat" src={category.img} className="absolute w-40 h-40 mb-4 -right-20 -bottom-10" />
              <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-red-500">{category.title}</p>
                <p className="text-xs text-gray-400">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
