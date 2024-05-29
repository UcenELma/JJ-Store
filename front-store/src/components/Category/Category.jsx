import React from "react";
import img1 from "../../assets/IMG/hero/jwl5.png";
import img2 from "../../assets/IMG/hero/jwl5.png";
import img3 from "../../assets/IMG/hero/jwl5.png";

const categories = [
  {
    img: img1,
    title: "Ring",
    description:
      "Detail is not an obsession, it is the very essence of perfection.",
  },
  {
    img: img2,
    title: "Ring",
    description:
      "Detail is not an obsession, it is the very essence of perfection.",
  },
  {
    img: img3,
    title: "Ring",
    description:
      "Detail is not an obsession, it is the very essence of perfection.",
  },
  {
    img: img3,
    title: "Ring",
    description:
      "Detail is not an obsession, it is the very essence of perfection.",
  },
];

const Category = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Category Collection
          </h2>

          <p className="mx-auto mt-4 mb-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative w-70 p-7 overflow-hidden bg-gray-700 shadow-lg rounded-xl"
            >
              <img
                alt="cat"
                src={category.img}
                className="absolute w-40 h-40 mb-4 -right-20 -bottom-10"
              />
              <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-red-500">
                  {category.title}
                </p>
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
