import React, { useState, useEffect, useContext } from 'react'
import { Cartcontext } from '../context/Context'
import { ShoppingCart } from 'phosphor-react'
import axios from 'axios'

const ProductCom = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((res) => setProducts(res.data))
			.catch((err) => console.log(err))
	}, [])

	const Globalstate = useContext(Cartcontext)
	const dispatch = Globalstate.dispatch
	console.log(Globalstate)
	return (
		<div className='justify-center  gap-5 grid grid-flow-row  lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-10 mx-4'>
			{products.map((product) =>{
				product.quantity = 1
				return(
				<div
					key={product.id}
					className='justify-center h-[300px] hover:scale-110 '
				>
					<div
						key={product.id}
						className='  h-[200px] justify-center items-center flex'
					>
						<img
							className='max-w-[140px] max-h-[170px]'
							src={product.image}
							alt={product.title}
						/>
						<button
							onClick={() => dispatch({ type: 'ADD', payload:product })}
							className='text-black absolute rounded-full border border-black ml-[200px] mt-[150px] p-1  hover:text-white hover:bg-black'
						>
							<ShoppingCart size={22} />
						</button>
					</div>
					<div className='max-h-[500px] px-2 py-1 bg-slate-100'>
						<div className=''>
							<p className='font-semibold'>{`Price ${product.price}`}</p>
						</div>
						<div className='flex'>
							<h2 className='whitespace-wrap max-h-6 overflow-hidden text-ellipsis hover:text-red-700 hover:max-h-[150px]'>
								{product.title}
							</h2>
						</div>
					</div>
				</div>
			)
			}
			)}
			<div></div>
		</div>
	)
}

export { ProductCom }
