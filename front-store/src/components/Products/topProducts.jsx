// import React from "react";
import React, {useState, useRef, useEffect } from "react";
import img1 from "../../assets/IMG/hero/jwl5.png";
import { CardFooter, Button, IconButton } from "@material-tailwind/react";
import CartSidebar from "../CartSidebar";

const topProducts = [
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
  },
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
  },
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
  },
  {
    img: img1,
    title: "Ring",
    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
    price: "1698.00 MAD",
    rating: 3,
  },
];

const TopProductsComponent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    // Add event listener to handle clicks outside of the cart sidebar
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
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
            fill="balck"
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
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="py-2">
      <div className="container">
        <div className="flex justify-between items-center mx-auto px-8 mb-3">
          <p className="underline text-sm text-yellow-500 hover:text-orange-500">
            Top products
          </p>
          <p className="underline text-right text-sm text-yellow-500 hover:text-orange-500">
            get similar products →
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="w-60 pt-2 pl-2 pr-2 m-auto bg-gray-300 shadow-lg rounded-lg"
            >
              <img
                src={product.img}
                alt="ring product"
                className="w-60 bg-white m-auto h-60 rounded-xl hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-xl active:scale-100 cursor-pointer"
              />
              <div className="pl-1 mt-6">
                <p className="text-lg font-mono font-semibold text-orange-600 text-left ">
                  {product.title}
                </p>
                <p className="text-xs text-gray-500 mb-4 mt-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between ">
                  <p className="text-white mb-1">{product.price}</p>
                  <div className="flex">{renderStars(product.rating)}</div>
                </div>
                <CardFooter className="pt-0">
                  <Button onClick={toggleCart}
                    ripple={false}
                    fullWidth={true}
                    className="bg-white text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isCartOpen && <div ref={cartRef}><CartSidebar/> </div>}
    </div>
  );
};

export default TopProductsComponent;

