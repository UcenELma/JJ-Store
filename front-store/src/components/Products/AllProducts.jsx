import React, { useState, useRef, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import img1 from "../../assets/IMG/hero/jwl5.png";
import { CardFooter, Button } from "@material-tailwind/react";
import CartSidebar from "../CartSidebar";

const initialProducts = [
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
    isNew: true,
    isLiked: false,
  },
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
    isNew: true,
    isLiked: true,
  },
];

const AllProducts = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const handleHeartClick = (index) => {
    const newProducts = [...products];
    newProducts[index].isLiked = !newProducts[index].isLiked;
    setProducts(newProducts);
  };

  const renderStars = (rating) => {
    const filledStars = rating;
    const emptyStars = 5 - rating;

    return (
      <>
        {[...Array(filledStars)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-1 h-4 w-4 text-warning"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={filledStars + i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="gray"
            stroke="gray"
            strokeWidth="1.5"
            className="mr-1 h-4 w-4 text-warning"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"            />
              </svg>
            ))}
          </>
        );
      };
    
      return (
        <div className="py-2">
          <div className="container">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 border-gray-200 pt-10 md:grid-cols-2 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="relative w-60 pb-4 m-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden"
                  onMouseEnter={() => setProducts(products.map((p, i) => i === index ? {...p, isLiked: false} : p))}
                >
                  {product.isNew && (
                    <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600 text-white">
                      New
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <img
                      src={product.img}
                      alt="ring product"
                      className="w-60 bg-white m-auto h-60 rounded-lg hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-xl active:scale-100 cursor-pointer"
                    />
                  </div>
                  <div className="pl-1 pr-1 mt-6">
                    <div className="flex justify-between">
                      <p className="text-lg font-mono font-semibold text-orange-600 text-left ">
                        {product.title}
                      </p>
                      <FaHeart
                        className={`absolute right-4 cursor-pointer text-2xl ${
                          product.isLiked ? "text-gray-900" : "text-white"
                        }`}
                        onClick={() => handleHeartClick(index)}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-4 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between ">
                      <p className="text-white mb-1">{product.price}</p>
                      <div className="flex">{renderStars(product.rating)}</div>
                    </div>
                    <CardFooter className="pt-0">
                      <Button
                        onClick={toggleCart}
                        ripple={false}
                        fullWidth={true}
                        className="bg-white text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4 mr-4"
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ol className="flex justify-center gap-1 mt-4 text-xs font-medium">
                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                  >
                    <span className="sr-only">Prev Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
    
                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    1
                  </a>
                </li>
    
                <li className="block size-8 rounded border-gray-900 bg-gray-900 text-center leading-8 text-white">
                  2
                </li>
    
                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    3
                  </a>
                </li>
    
                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    4
                  </a>
                </li>
    
                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          {isCartOpen && (
            <div ref={cartRef}>
              <CartSidebar />
            </div>
          )}
        </div>
      );
    };
    
    export default AllProducts;
    
