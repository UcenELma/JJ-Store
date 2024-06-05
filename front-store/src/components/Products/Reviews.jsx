import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../features/authSlice';

const Reviews = ({ productId }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [reviews, setReviews] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await request.get(`/reviews/product/${productId}`);
        setReviews(response.data);
        const usernamePromises = response.data.map(review => fetchUsername(review.user));
        const resolvedUsernames = await Promise.all(usernamePromises);
        setUsernames(resolvedUsernames);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  const fetchUsername = async (userId) => {
    try {
      const userResponse = await request.get(`/customers/${userId}`);
      return userResponse.data.username;
    } catch (error) {
      console.error('Error fetching username:', error);
      return '';
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-yellow-300" : "text-gray-300"}`}
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }
    return stars;
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await request.post("/reviews", {
        product: productId,
        rating,
        comment
      });
      // Add the new review to the state
      setReviews([...reviews, response.data]);
      // Clear the comment and rating fields
      setComment('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="space-y-6">
      {isAuthenticated && (
        <form onSubmit={handleSubmitReview}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          ></textarea>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            placeholder="Rating (1-5)"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Submit Review
          </button>
        </form>
      )}
      {!isAuthenticated && (
        <p className="text-gray-500 dark:text-gray-400">Please log in to leave a review.</p>
      )}
      {/* Render existing reviews */}
      <div>
        {reviews.map((review, index) => (
          <article key={review._id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center mb-4">
              {/* <img
                className="w-10 h-10 me-4 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt=""
              /> */}
              <div className="font-medium dark:text-white">
                <p>{usernames[index]} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500" ></time></p>

                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                {renderStars(review.rating)}
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>Reviewed on <time dateTime={review.date}>March 3, 2017</time></p>
              </footer>
              <p className="mb-2 text-gray-500 dark:text-gray-400">{review.comment}</p>
              <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                <div className="flex items-center mt-3">
                  <button className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</button>
                  <button className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</button>
                </div>
              </aside>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
