// import React, { useState, useRef, useEffect } from "react";
// import { FaHeart } from "react-icons/fa";
// import img1 from "../../assets/IMG/hero/jwl5.png";
// import { CardFooter, Button } from "@material-tailwind/react";
// import CartSidebar from "../CartSidebar";

// const initialProducts = [
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: false,
//     isLiked: false,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: true,
//     isLiked: true,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: false,
//     isLiked: false,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: false,
//     isLiked: true,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: true,
//     isLiked: false,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: true,
//     isLiked: true,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: false,
//     isLiked: false,
//   },
//   {
//     img: img1,
//     title: "Ring",
//     description: "Lorem ipsum dolor, sit amet consectr adipisicing elit amet.",
//     price: "1698.00 MAD",
//     rating: 3,
//     isNew: false,
//     isLiked: true,
//   },
// ];

// const AllProducts = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [products, setProducts] = useState(initialProducts);
//   const cartRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cartRef.current && !cartRef.current.contains(event.target)) {
//         setIsCartOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleCart = () => {
//     setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
//   };

//   const handleHeartClick = (index) => {
//     const newProducts = [...products];
//     newProducts[index].isLiked = !newProducts[index].isLiked;
//     setProducts(newProducts);
//   };

//   const renderStars = (rating) => {
//     const filledStars = rating;
//     const emptyStars = 5 - rating;

//     return (
//       <>
//         {[...Array(filledStars)].map((_, i) => (
//           <svg
//             key={i}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="black"
//             className="mr-1 h-4 w-4 text-warning"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ))}
//         {[...Array(emptyStars)].map((_, i) => (
//           <svg
//             key={filledStars + i}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="gray"
//             stroke="gray"
//             strokeWidth="1.5"
//             className="mr-1 h-4 w-4 text-warning"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"            />
//               </svg>
//             ))}
//           </>
//         );
//       };

//       return (
//         <div className="py-2">
//           <div className="container">
//             <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 border-gray-200 pt-10 md:grid-cols-2 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-4">
//               {products.map((product, index) => (
//                 <div
//                   key={index}
//                   className="relative w-60 pb-4 m-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden"
//                   onMouseEnter={() => setProducts(products.map((p, i) => i === index ? {...p, isLiked: false} : p))}
//                 >
//                   {product.isNew && (
//                     <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600 text-white">
//                       New
//                     </span>
//                   )}
//                   <div className="flex items-center justify-between">
//                     <img
//                       src={product.img}
//                       alt="ring product"
//                       className="w-60 bg-white m-auto h-60 rounded-lg hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-xl active:scale-100 cursor-pointer"
//                     />
//                   </div>
//                   <div className="pl-1 pr-1 mt-6">
//                     <div className="flex justify-between">
//                       <p className="text-lg font-mono font-semibold text-orange-600 text-left ">
//                         {product.title}
//                       </p>
//                       <FaHeart
//                         className={`absolute right-4 cursor-pointer text-2xl ${
//                           product.isLiked ? "text-gray-900" : "text-white"
//                         }`}
//                         onClick={() => handleHeartClick(index)}
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mb-4 mt-1">
//                       {product.description}
//                     </p>
//                     <div className="flex items-center justify-between ">
//                       <p className="text-white mb-1">{product.price}</p>
//                       <div className="flex">{renderStars(product.rating)}</div>
//                     </div>
//                     <CardFooter className="pt-0">
//                       <Button
//                         onClick={toggleCart}
//                         ripple={false}
//                         fullWidth={true}
//                         className="bg-white text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4 mr-4"
//                       >
//                         Add to Cart
//                       </Button>
//                     </CardFooter>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <ol className="flex justify-center gap-1 mt-4 text-xs font-medium">
//                 <li>
//                   <a
//                     href="#"
//                     className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
//                   >
//                     <span className="sr-only">Prev Page</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-3 w-3"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
//                   >
//                     1
//                   </a>
//                 </li>

//                 <li className="block size-8 rounded border-gray-900 bg-gray-900 text-center leading-8 text-white">
//                   2
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
//                   >
//                     3
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
//                   >
//                     4
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
//                   >
//                     <span className="sr-only">Next Page</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-3 w-3"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </li>
//               </ol>
//             </div>
//           </div>
//           {isCartOpen && (
//             <div ref={cartRef}>
//               <CartSidebar />
//             </div>
//           )}
//         </div>
//       );
//     };

//     export default AllProducts;

import React from "react";
import product1 from "../../assets/IMG/bg/bg4.jpg";
import product2 from "../../assets/IMG/bg/img4.jpeg";
import product3 from "../../assets/IMG/p/p1.jpeg";
import product4 from "../../assets/IMG/p/p2.jpeg";

const AllProducts = () => {
  // Define product data
  const products = [
    {
      title: "Basic Tee",
      price: "24.00 MAD",
      imageSrc: product1,
    },
    {
      title: "Casual Shirt",
      price: "32.00 MAD",
      imageSrc: product2,
    },
    {
      title: "Formal Pants",
      price: "45.00 MAD",
      imageSrc: product3,
    },
    {
      title: "Formal Pants",
      price: "45.00 MAD",
      imageSrc: product3,
    },
    {
      title: "Casual Shirt",
      price: "32.00 MAD",
      imageSrc: product2,
    },
    {
      title: "Basic Tee",
      price: "24.00 MAD",
      imageSrc: product1,
    },
  ];

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div>
                <label
                  htmlFor="SortBy"
                  className="block text-xs font-medium text-gray-700"
                >
                  {" "}
                  Sort By{" "}
                </label>

                <select
                  id="SortBy"
                  className="mt-1 rounded border-gray-300 text-sm"
                >
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filters
                </p>

                <div className="mt-1 space-y-2">
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">
                        {" "}
                        Availability{" "}
                      </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              In Stock (5+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Pre Order (3+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Out of Stock (10+){" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Price </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          The highest price is $600{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Material </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Dipisicing.
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterRed"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Reipsumd{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterBlue"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              consectetur{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterGreen"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              dolor{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOrange"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              doconser{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPurple"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Sectetle{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterTeal"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Teal{" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <a href="#" className="group block overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />
                      <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {product.title}
                        </h3>
                        <p className="mt-2">
                          <span className="sr-only">Regular Price</span>
                          <span className="tracking-wider text-gray-900">
                            {product.price}
                          </span>
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* // */}
            <div className="flex justify-center">
            <ol className="flex justify-center gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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

              <li className="block size-8 rounded border-gray-600 bg-gray-600 text-center leading-8 text-white">
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
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
