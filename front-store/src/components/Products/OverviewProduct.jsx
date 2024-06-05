// import React from 'react'

// const OverviewProduct = () => {
//   return (
//     <section class="py-12 sm:py-16">
//   <div class="container mx-auto px-4">
//     <nav class="flex">
//       <ol role="list" class="flex items-center">
//         <li class="text-left">
//           <div class="-m-1">
//             <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
//           </div>
//         </li>

//         <li class="text-left">
//           <div class="flex items-center">
//             <span class="mx-2 text-gray-400">/</span>
//             <div class="-m-1">
//               <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
//             </div>
//           </div>
//         </li>

//         <li class="text-left">
//           <div class="flex items-center">
//             <span class="mx-2 text-gray-400">/</span>
//             <div class="-m-1">
//               <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Coffee </a>
//             </div>
//           </div>
//         </li>
//       </ol>
//     </nav>

//     <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
//       <div class="lg:col-span-3 lg:row-end-1">
//         <div class="lg:flex lg:items-start">
//           <div class="lg:order-2 lg:ml-5">
//             <div class="max-w-xl overflow-hidden rounded-lg">
//               <img class="h-full w-full max-w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//             </div>
//           </div>

//           <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
//             <div class="flex flex-row items-start lg:flex-col">
//               <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
//                 <img class="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//               </button>
//               <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
//                 <img class="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//               </button>
//               <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
//                 <img class="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
//         <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Afro-Brazillian Coffee</h1>

//         <div class="mt-5 flex items-center">
//           <div class="flex items-center">
//             <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
//             </svg>
//             <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
//             </svg>
//             <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
//             </svg>
//             <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
//             </svg>
//             <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
//             </svg>
//           </div>
//           <p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
//         </div>

//         <h2 class="mt-8 text-base text-gray-900">Coffee Type</h2>
//         <div class="mt-3 flex select-none flex-wrap items-center gap-1">
//           <label class="">
//             <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
//           </label>
//           <label class="">
//             <input type="radio" name="type" value="Whole Bean" class="peer sr-only" />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
//           </label>
//           <label class="">
//             <input type="radio" name="type" value="Groud" class="peer sr-only" />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
//           </label>
//         </div>

//         <h2 class="mt-8 text-base text-gray-900">Choose subscription</h2>
//         <div class="mt-3 flex select-none flex-wrap items-center gap-1">
//           <label class="">
//             <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
//             <span class="mt-1 block text-center text-xs">$80/mo</span>
//           </label>
//           <label class="">
//             <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
//             <span class="mt-1 block text-center text-xs">$60/mo</span>
//           </label>
//           <label class="">
//             <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
//             <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
//             <span class="mt-1 block text-center text-xs">$40/mo</span>
//           </label>
//         </div>

//         <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
//           <div class="flex items-end">
//             <h1 class="text-3xl font-bold">$60.50</h1>
//             <span class="text-base">/month</span>
//           </div>

//           <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
//             <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//             Add to cart
//           </button>
//         </div>

//         <ul class="mt-8 space-y-2">
//           <li class="flex items-center text-left text-sm font-medium text-gray-600">
//             <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
//             </svg>
//             Free shipping worldwide
//           </li>

//           <li class="flex items-center text-left text-sm font-medium text-gray-600">
//             <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
//             </svg>
//             Cancel Anytime
//           </li>
//         </ul>
//       </div>

//       <div class="lg:col-span-3">
//         <div class="border-b border-gray-300">
//           <nav class="flex gap-4">
//             <a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

//             <a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
//               Reviews
//               <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
//             </a>
//           </nav>
//         </div>

//         <div class="mt-8 flow-root sm:mt-12">
//           <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
//           <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
//           <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
//           <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
//           <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default OverviewProduct

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OverviewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
                </div>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {product.productName} </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img className="h-full w-full max-w-full object-cover" src={product.mainImage} alt={product.name} />
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {product.images.map((image, index) => (
                    <button key={index} type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                      <img className="h-full w-full object-cover" src={image} alt={product.name} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className={`h-5 w-5 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.75 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">{product.reviews} Reviews</p>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Color</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {product.colors.map((color, index) => (
                <label key={index} className="cursor-pointer">
                  <input type="radio" name="color" value={color} className="sr-only" />
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${color === product.selectedColor ? 'border-gray-900' : 'border-transparent'}`}>
                    <span className={`h-5 w-5 rounded-full bg-${color}`}></span>
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-8 flex items-center">
              <h2 className="text-base text-gray-900">Size</h2>
              <div className="ml-4 flex select-none flex-wrap items-center gap-1">
                {product.sizes.map((size, index) => (
                  <label key={index} className="cursor-pointer">
                    <input type="radio" name="size" value={size} className="sr-only" />
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${size === product.selectedSize ? 'border-gray-900' : 'border-transparent'}`}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <button type="button" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Add to bag
              </button>
              <button type="button" className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Add to wishlist
              </button>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="mt-4 prose prose-sm text-gray-500">{product.description}</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-t border-b border-gray-200 py-4">
              <div className="prose prose-sm text-gray-500">
                <ul>
                  <li>Free shipping worldwide</li>
                  <li>Cancel Anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewProduct;


