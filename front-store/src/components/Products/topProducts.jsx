import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import product1 from "../../assets/IMG/bg/bg4.jpg";
import product2 from "../../assets/IMG/bg/img4.jpeg";
import product3 from "../../assets/IMG/p/p1.jpeg";
import product4 from "../../assets/IMG/p/p2.jpeg";

const TopProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const products = [
    {
      id: 1,
      title: "Basic Tee",
      imageSrc: product1,
      price: "2294.00 MAD",
      rating: 2,
    },
    {
      id: 2,
      title: "Basic Tee",
      imageSrc: product2,
      price: "5949.00 MAD",
      rating: 3,
    },
    {
      id: 3,
      title: "Basic Tee",
      imageSrc: product3,
      price: "24.00 MAD",
      rating: 5,
    },
    {
      id: 4,
      title: "Basic Tee",
      imageSrc: product4,
      price: "9824.00 MAD",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        >
          {i <= rating ? "\u2605" : "\u2606"}
        </span>
      );
    }
    return stars;
  };

  const handleLikeClick = (index) => {
    const newLikedProducts = [...likedProducts];
    newLikedProducts[index] = !newLikedProducts[index];
    setLikedProducts(newLikedProducts);
  };

  const handleGetYoursClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product page with the product id
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Product Collection
              </h2>
              <p className="mx-auto mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <li key={index} className="relative">
                  <a className="group block overflow-hidden relative">
                    <img
                      src={product.imageSrc}
                      alt={product.title}
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        className="text-white hover:text-red-500"
                        onClick={() => handleLikeClick(index)}
                      >
                        {likedProducts[index] ? (
                          <FaHeart size={24} />
                        ) : (
                          <FaRegHeart size={24} />
                        )}
                      </button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-center py-2 opacity-0 group-hover:opacity-100 hover:scale-105 transition-opacity m-2 rounded-md">
                      <button
                        className="text-gray-100 hover:text-gray-800 font-semibold"
                        onClick={() => handleGetYoursClick(product.id)} // Add onClick handler
                      >
                        <span className="ml-2">Get Yours</span>
                      </button>
                    </div>
                  </a>
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700">{product.title}</h3>
                    <p className="mt-2 flex justify-between">
                      <span className="sr-only"> Regular Price </span>
                      <span className="tracking-wider text-gray-900">
                        {product.price}
                      </span>
                      <div>{renderStars(product.rating)}</div>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopProducts;
