import React from 'react'
import Header from './components/Header'
import { ReviewContextProvider } from './context/ReviewContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Review from './components/Review'
function App() {
	return (
		<ReviewContextProvider>
			<Router>
				<main>
					<section className="container">
						<Routes>
							<Route
								exact
								path="/"
								element={
									<>
										<Header />
										<Review />
									</>
								}
							/>
						</Routes>
					</section>
				</main>
			</Router>
		</ReviewContextProvider>
	)
}

export default App
