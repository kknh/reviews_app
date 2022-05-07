import React, { createContext, useReducer } from 'react'
//import data from '../data/data'
import reviewReducer from './reviewReducer'
import { initialState } from './reviewReducer'
const ReviewContext = createContext()
export function ReviewContextProvider({ children }) {
	const [state, dispatch] = useReducer(reviewReducer, initialState)

	//const [reviews, setReviews] = useState(data)
	//const [index, setIndex] = useState(0)

	const increment = () => {
		dispatch({ type: 'INCREMENT' })
	}
	const decrement = () => {
		dispatch({ type: 'DECREMENT' })
	}
	const random = () => {
		dispatch({ type: 'RANDOM' })
	}
	return (
		<ReviewContext.Provider
			value={{
				reviews: state.reviews,
				index: state.index,
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
