import React from 'react';
import { FaStar } from 'react-icons/fa';
import user1 from './icons_assets/user1.jpg';
import user2 from './icons_assets/user2.jpg';
import user3 from './icons_assets/user3.jpg';
import user4 from './icons_assets/user4.jpg';
import user5 from './icons_assets/user5.jpg';
import './Review.css'

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: user1,
    rating: 4,
    review: 'Good food,good life.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: user2,
    rating: 5,
    review: 'Best food,best life'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    image: user3,
    rating: 3,
    review: 'Me likes this food!'
  },
  {
    id: 4,
    name: 'Sara Lee',
    image: user4,
    rating: 4,
    review: 'Good quality dishes!'
  },
  {
    id: 5,
    name: 'David Kim',
    image: user5,
    rating: 2,
    review: 'Enjoyed eating'
  }
];

const Review = ({ name, image, rating, review }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="star" />);
  }

  return (
    <div className="review-row">
      <div className="review-image">
        <img src={image} alt={name} />
      </div>
      <div className="review-content">
        <h3>{name}</h3>
        <div className="review-rating">{stars}</div>
        <p>{review}</p>
      </div>
    </div>
  );
};

const ReviewRow = () => {
  return (
    <div className="review-row">
      {reviews.map(review => (
        <Review
          key={review.id}
          name={review.name}
          image={review.image}
          rating={review.rating}
          review={review.review}
        />
      ))}
    </div>
  );
};

export default ReviewRow;
