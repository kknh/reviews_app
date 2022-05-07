import data from '../data/data'

function reviewReducer(state, action) {
	const { index, reviews } = state
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				index: index < reviews.length - 1 ? index + 1 : 0,
			}
		case 'DECREMENT':
			return {
				...state,
				index: index > 0 ? index - 1 : reviews.length - 1,
			}
		case 'RANDOM':
			const randomIndex = Math.floor(Math.random() * reviews.length)
			return {
				...state,
				index: randomIndex,
			}
		default:
			return state
	}
}

export const initialState = {
	reviews: data,
	index: 0,
}

export default reviewReducer
