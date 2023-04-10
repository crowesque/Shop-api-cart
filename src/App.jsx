import React from 'react'
import Shop from './Pages/Shop/Shop'
import Navbar from './components/navbar'
import Cart from './pages/cart/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<div className=''>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Shop />} />
					<Route path='/Cart' element={<Cart />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
