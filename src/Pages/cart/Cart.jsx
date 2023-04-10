import React, { useContext } from 'react'
import { Cartcontext } from '../../context/Context'

const Cart = () => {
	const Globalstate = useContext(Cartcontext)
	const state = Globalstate.state
	const dispatch = Globalstate.dispatch
	const total = state.reduce((total, product) => {
		return total + product.price * product.quantity
	}, 0)
	return (
		<div className='justify-center grid grid-flow-row grid-cols-1 mt-10 mx-4'>
			{state.map((product) => {
				return (
					<div key={product.id} className=' flex h-[300px] '>
						<div className='border w-[180px] h-[250px] p-2 items-center justify-center align-middle flex'>
							<img
								className=' max-w-[170px] max-h-[200px]'
								src={product.image}
								alt={product.title}
							/>
						</div>
						<div className='border w-screen h-[250px] p-4'>
							<div className=' font-semibol whitespace-wrap max-h-[112px] overflow-hidden text-ellipsis '>
								<p>{product.title}</p>
							</div>
							<div className='flex p-3'>
								<button
									onClick={() =>
										dispatch({ type: 'INCREASE', payload: product })
									}
									className=' bg-black text-white rounded-full px-3'
								>
									+
								</button>
								<p className=' font-semibold px-3 w-10'>{product.quantity}</p>
								<button
									onClick={() =>
										product.quantity > 1
											? dispatch({ type: 'DECREASE', payload: product })
											: dispatch({ type: 'REMOVE', payload: product })
									}
									className=' bg-black text-white rounded-full px-3'
								>
									-
								</button>
							</div>
							<div className=' ml-6 border flex max-w-[90px] justify-center items-center  font-semibold'>
								<p>{`$${product.quantity * product.price}`}</p>
							</div>
							<div className=''>
								<button
									onClick={() => dispatch({ type: 'REMOVE', payload: product })}
									className=' bg-black rounded-full px-2 text-white '
								>
									X
								</button>
							</div>
						</div>
					</div>
				)
			})}
        {state.length > 0 && (
          <div className='px-4 font-bold flex justify-start max-w-screen pb-12'>
            Cart Total ${total}
          </div>
      )}
    </div>
	)
}

export default Cart
