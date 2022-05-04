import React, { useContext } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import ReviewContext from '../context/ReviewContext'
const Review = () => {
	const { reviews, index, random, increment, decrement } =
		useContext(ReviewContext)
	const reviewElements = reviews.map((review) => (
		<article className="review" key={review.id}>
			<div className="img-container">
				<img src={review.image} alt={review.name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{review.name}</h4>
			<p className="job">{review.job}</p>
			<p className="info">{review.text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={decrement}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={increment}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={random}>
				surprise me
			</button>
		</article>
	))
	return reviews.length > 0 ? (
		reviewElements[index]
	) : (
		<p>There are no reviews</p>
	)
}

export default Review
