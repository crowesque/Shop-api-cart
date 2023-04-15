import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Cartcontext } from '../context/Context'

const Navbar = () => {
	const { state } = useContext(Cartcontext)
	return (
		<div className=' flex w-screen h-14 text-white bg-black justify-end items-center'>
			<div className=' flex text-white mr-11 gap-5 text-xl'>
				<Link to='/'>Shop</Link>
				<div className='flex bg-white rounded-full text-black pl-2'>
					<Link className='flex' to='/Cart'>
						<ShoppingCart size={32} />
						<span className='bg-black border border-white border-spacing-1 text-white rounded-full font-bold text-[15px] px-[15px]'>
							{state.length}
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
