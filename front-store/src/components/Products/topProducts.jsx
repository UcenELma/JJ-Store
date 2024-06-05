import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import request from "../../utils/request";

const TopProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await request.get("/products");
        const productsData = productsResponse.data;
  
        // Fetch reviews for each product
        const productsWithReviews = await Promise.all(
          productsData.map(async (product) => {
            const reviewsResponse = await request.get(
              `/reviews/product/${product.id}`
            );
            const reviewsData = reviewsResponse.data;
            return { ...product, reviews: reviewsData };
          })
        );
  
        // Calculate average ratings for each product
        const productsWithAverageRatings = productsWithReviews.map((product) => {
          if (product.reviews.length > 0) {
            let sum = 0;
            product.reviews.forEach((review) => (sum += review.rating));
            const avgRating = sum / product.reviews.length;
            return { ...product, averageRating: avgRating.toFixed(1) };
          } else {
            // If there are no reviews, set average rating to 0
            return { ...product, averageRating: 0 };
          }
        });
  
        setProducts(productsWithAverageRatings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []); // Empty dependency array to ensure the effect runs only once
  

  const handleLikeClick = (index) => {
    const newLikedProducts = [...likedProducts];
    newLikedProducts[index] = !newLikedProducts[index];
    setLikedProducts(newLikedProducts);
  };

  const handleGetYoursClick = (id) => {
    navigate(`/product/${id}`);
  };

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
              {products
                .filter((product) => product.status === "inactive")
                .map((product, index) => (
                  <li key={index} className="relative">
                    <a className="group block overflow-hidden relative">
                      <img
                        src={`http://localhost:2500/${product.images[0]}`}
                        alt={product.productName}
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
                          onClick={() => handleGetYoursClick(product.id)}
                        >
                          <span className="ml-2">Get Yours</span>
                        </button>
                      </div>
                    </a>
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700">
                        {product.productName}
                      </h3>
                      <p className="mt-2 flex justify-between">
                        <span className="sr-only">Regular Price</span>
                        <span className="tracking-wider text-gray-900">
                          {product.price}
                        </span>
                        <div>
                          {renderStars(parseFloat(product.averageRating))}
                        </div>
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
