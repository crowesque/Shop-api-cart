import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
	return (
		<div className=' flex w-screen h-14 text-white bg-black justify-end items-center'>
			<div className=' flex text-white mr-11 gap-5 text-xl'>
				<Link to='/'>Shop</Link>
				<Link to='/Cart'>
					<ShoppingCart size={32} />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
