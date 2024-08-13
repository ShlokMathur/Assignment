// src/components/ReviewList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewHighlighter key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
