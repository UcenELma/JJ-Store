
import { useState } from "react";
import img from "../../src/assets/IMG/bg/bg1.jpeg";
import img1 from "../../src/assets/IMG/bg/bg1.jpeg";
import img2 from "../../src/assets/IMG/bg/bg1.jpeg";
import img3 from "../../src/assets/IMG/bg/bg1.jpeg";


const product = {
  img: img,
  img1: img1,
  img2: img2,
  img3: img3,
  title: "Ring",
  description: "This is a Gold ring.",
  price: "1698.00 MAD",
  rating: 3,
};

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

const ProductDetail = () => {
  const [material, setMaterial] = useState();
  const [size, setSize] = useState();
//   const { id } = useParams(); // Retrieve the product id from the URL
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={product.img}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-40 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product.img1}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-40 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product.img2}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-40 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product.img3}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm:text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
              <div>{renderStars(product.rating)}</div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  1,209 Reviews
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Jewelry Material </h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label>
                <button 
                  className={`${material === 'gold' ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setMaterial("gold")}
                >
                  Gold
                </button>
              </label>
              <label>
                <button 
                  className={`${material === 'silver' ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setMaterial("silver")}
                >
                  Silver
                </button>
              </label>
              <label>
                <button 
                  className={`${material === 'palladium' ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setMaterial("palladium")}
                >
                  Palladium
                </button>
              </label>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Size</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label>
                <button 
                  className={`${size === 16 ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setSize(16)}
                >
                  16
                </button>
              </label>
              <label>
                <button 
                  className={`${size === 18 ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setSize(18)}
                >
                  18
                </button>
              </label>
              <label>
                <button 
                  className={`${size === 20 ? "bg-gray-900 text-white" : "text-black"} rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setSize(20)}
                >
                  20
                </button>
              </label>
            </div>

            <div className="mt-8 flex">
              <div className="mr-10">
                <div className="text-lg font-bold text-gray-900">
                  {product.price}
                </div>
              </div>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Description
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
