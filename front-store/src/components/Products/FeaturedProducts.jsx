import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Importing icons from react-icons/fa
import product1 from "../../assets/IMG/bg/bg4.jpg";
import product2 from "../..//assets/IMG/bg/img4.jpeg";
import product3 from "../../assets/IMG/p/p1.jpeg";
import product4 from "../../assets/IMG/p/p2.jpeg";

const FeaturedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]); // State to track liked products

  const products = [
    {
      title: "Basic Tee",
      imageSrc: product1,
      price: "2294.00 MAD",
      rating: 2,
    },
    {
      title: "Basic Tee",
      imageSrc: product2,
      price: "5949.00 MAD",
      rating: 3,
    },
    {
      title: "Basic Tee",
      imageSrc: product3,
      price: "24.00 MAD",
      rating: 5,
    },
    {
      title: "Basic Tee",
      imageSrc: product4,
      price: "9824.00 MAD",
      rating: 5,
    },
  ];

  // Function to render star rating based on the given rating
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

  // Function to handle like button click
  const handleLikeClick = (index) => {
    const newLikedProducts = [...likedProducts];
    newLikedProducts[index] = !newLikedProducts[index];
    setLikedProducts(newLikedProducts);
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <ul className="mt-8  grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Map over products array and render each product */}
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
                    <button className="text-gray-100 hover:text-gray-800 font-semibold ">
                      <span className="ml-2">Quick View</span>
                    </button>
                  </div>
                </a>
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700">{product.title}</h3>
                  <p className="mt-2 flex justify-between">
                    <span className="sr-only"> Regular AAAAAAAA Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      {product.price}{" "}
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
  );
};

export default FeaturedProducts;


// import React, { useState, useRef, useEffect } from "react";
// import { FaHeart } from 'react-icons/fa'; // Importing heart icon from react-icons/fa
// import img1 from "../../assets/IMG/hero/jwl5.png";
// import { CardFooter, Button } from "@material-tailwind/react";
// import CartSidebar from "../CartSidebar";



// const topProducts = [
//  {
//    img: img1,
//    title: "Ring",
//    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//    price: "1698.00 MAD",
//    rating: 3,
//    isNew: true,
//   },
//   {
//    img: img1,
//    title: "Ring",
//    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//    price: "1698.00 MAD",
//    rating: 3,
//    isNew: true,
//   },
//   {
//    img: img1,
//    title: "Ring",
//    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//    price: "1698.00 MAD",
//    rating: 3,
//    isNew: true,
//   },
//   {
//    img: img1,
//    title: "Ring",
//    description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//    price: "1698.00 MAD",
//    rating: 3,
//    isNew: true,
//   },
// ];

// const FeaturedProducts = () => {
//  const [isCartOpen, setIsCartOpen] = useState(false);
//  const [heartClicked, setHeartClicked] = useState(false); // State to track if heart icon is clicked
//  const cartRef = useRef(null);

  

//  useEffect(() => {
//   const handleClickOutside = (event) => {
//    if (cartRef.current && !cartRef.current.contains(event.target)) {
//     setIsCartOpen(false);
//    }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
  
  

//   return () => {
//    document.removeEventListener("mousedown", handleClickOutside);
//   };
//  }, []);

//  const toggleCart = () => {
//   setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
//  };

//  const handleHeartClick = () => {
//   setHeartClicked(!heartClicked); // Toggle the clicked status of the heart icon
//  };

//  const renderStars = (rating) => {
//   const filledStars = rating;
//   const emptyStars = 5 - rating;

//   return (
//    <>
//     {[...Array(filledStars)].map((_, i) => (
//      <svg
//       key={i}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="black"
//       className="mr-1 h-4 w-4 text-warning"
//      >
//       <path
//        fillRule="evenodd"
//        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//        clipRule="evenodd"
//       />
//      </svg>
//     ))}
//     {[...Array(emptyStars)].map((_, i) => (
//      <svg
//       key={filledStars + i}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="gray"
//       stroke="gray"
//       strokeWidth="1.5"
//       className="mr-1 h-4 w-4 text-warning"
//      >
//       <path
//        strokeLinecap="round"
//        strokeLinejoin="round"
//        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
//       />
//      </svg>
//     ))}
//    </>
//   );
//  };

//  return (
//  <div className="py-2">
//   <div className="container">
   
//    <h1 className="flex justify-center m-4" style={{ fontSize: '30px' }}>Featured Products</h1>

//    {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2"> */}
//    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-10 md:grid-cols-2 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-4">
//     {topProducts.map((product, index) => ( 
//      <div
//       key={index}
//       className="relative w-60 pb-4 m-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden"
//       onMouseEnter={() => setHeartClicked(false)} // Reset heart click status when hovering over the product
//      >
//       {product.isNew && (
//        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600 text-white">
//         New
//        </span>
//       )}
//       <div className="flex items-center justify-between">
//        <img
//         src={product.img}
//         alt="ring product"
//         className="w-60 bg-white m-auto h-60 rounded-lg hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-xl active:scale-100 cursor-pointer"
//        />
//       </div>
//       <div className="pl-1 pr-1 mt-6">
//         <div className="flex justify-between">
//            <p className="text-lg font-mono font-semibold text-orange-600 text-left ">
//         {product.title}
        
//        </p>
//       <FaHeart
//           className={`absolute right-4 cursor-pointer text-2xl ${heartClicked ? 'text-gray-900' : 'text-white'}`} // Conditionally render red or gray heart based on clicked status
//           onClick={handleHeartClick}
//          />
//         </div>
      
//        <p className="text-xs text-gray-500 mb-4 mt-1">
//         {product.description}
//        </p>
//        <div className="flex items-center justify-between ">
//         <p className="text-white mb-1">{product.price}</p>
//         <div className="flex">
//          {renderStars(product.rating)}
//         </div>
//        </div>
//        <CardFooter className="pt-0">
//         <Button
//          onClick={toggleCart}
//          ripple={false}
//          fullWidth={true}
//          className="bg-white text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4 mr-4"
//         >
//          Add to Cart
//         </Button>
//        </CardFooter>
//       </div>
//      </div>
//     ))}
//    </div>
//   </div>
//   {isCartOpen && (
//    <div ref={cartRef}>
//     <CartSidebar />
//    </div>
//   )}
//  </div>
// );
// };

// export default FeaturedProducts;

