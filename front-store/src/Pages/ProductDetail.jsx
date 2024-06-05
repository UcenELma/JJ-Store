import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import request from "../utils/request";
import img from "../../src/assets/IMG/bg/bg1.jpeg"; // Temporary until fetching is implemented
import Reviews from "../components/Products/Reviews";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/authSlice";

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
  const { id } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [material, setMaterial] = useState();
  const [size, setSize] = useState();
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await request.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await request.get(`/reviews/product/${id}`);
        setReviews(response.data);
        // Calculate average rating and total reviews
        let sum = 0;
        response.data.forEach((review) => (sum += review.rating));
        const avgRating = sum / response.data.length;
        setAverageRating(avgRating.toFixed(1));
        setTotalReviews(response.data.length);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
                    src={
                      product.images?.length
                        ? `http://localhost:2500/${product.images[0]}`
                        : img
                    }
                    alt={product.productName}
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {product.images?.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      className="flex-0 aspect-square mb-3 h-40 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt={product.productName}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm:text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.productName}
            </h1>
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <div>{renderStars(parseFloat(averageRating))}</div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Jewelry Material</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {["gold", "silver", "palladium"].map((materialOption) => (
                <button
                  key={materialOption}
                  className={`${
                    material === materialOption
                      ? "bg-gray-900 text-white"
                      : "text-black"
                  } rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setMaterial(materialOption)}
                >
                  {materialOption.charAt(0).toUpperCase() +
                    materialOption.slice(1)}
                </button>
              ))}
            </div>

            <h2 className="mt-8 text-base text-gray-900">Size</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {[16, 18, 20].map((sizeOption) => (
                <button
                  key={sizeOption}
                  className={`${
                    size === sizeOption
                      ? "bg-gray-900 text-white"
                      : "text-black"
                  } rounded-lg border border-black px-6 py-2 font-bold`}
                  onClick={() => setSize(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
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
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integrate Reviews component here */}
      <div className="container mt-10">
        <Reviews productId={id} />
      </div>
    </section>
  );
};

export default ProductDetail;
