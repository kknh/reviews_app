import React, { useState, createContext } from 'react'
import data from '../data/data'
const ReviewContext = createContext()
export function ReviewContextProvider({ children }) {
	const [reviews, setReviews] = useState(data)
	const [index, setIndex] = useState(0)
	const increment = () => {
		index < reviews.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0)
	}
	const decrement = () => {
		index > 0 ? setIndex((prev) => prev - 1) : setIndex(reviews.length - 1)
	}
	const random = () => {
		const randomIndex = Math.floor(Math.random() * reviews.length)
		setIndex(randomIndex)
	}
	return (
		<ReviewContext.Provider
			value={{
				reviews,
				index,
				random,
				increment,
				decrement,
			}}
		>
			{children}
		</ReviewContext.Provider>
	)
}

export default ReviewContext
