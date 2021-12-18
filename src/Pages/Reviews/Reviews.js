import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch("https://sleepy-scrubland-93051.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            {reviews.length === 0 ?
                <Spinner animation="border" variant="success" />

                :
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            reviews.map(review => <div
                                key={review._id}
                            >
                                <div className="col pt-5">
                                    <div className="card card-design h-100 rounded-3xl shadow-2xl">
                                        <div className="card-body text-white-300 fw-bolder">
                                            <h4 className="card-title">{review.name}</h4>
                                            <p>{review.description}</p>
                                            <span>Ratings:</span>
                                            <Rating
                                                className="fs-4"
                                                initialRating={review.rating}
                                                emptySymbol="far fa-star "
                                                fullSymbol="fas fa-star "
                                                readonly></Rating>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            }
        </div>
    );
};

export default Reviews;