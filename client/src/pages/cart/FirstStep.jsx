import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, lowerQuantity, removeFromCart } from '../../redux/cartSlice'
import Header from '../../layout/header'
import SadCart from '../../assets/cart-empty.png'

const FirstStep = ({ step, setStep }) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
    const total = useSelector((state) => state.persistedReducer.cart.total)

    const goForward = () => {
        setStep(step + 1)
    }

    return (
        <>
            <Header />
            <div className='max-w-2xl m-auto my-4'>
                {/* Cart empty */}
                {cart.length == 0 ?
                    <div className=''>
                        <h1 className='text-center text-3xl'>Oops, you have no items added to your cart!</h1>
                        <img src={SadCart} className='m-auto' />
                        <button type="submit" className="flex m-auto text-md bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">Go shopping</button>
                    </div>
                    :
                    // Cart not empty
                    <div>
                        <h1 className='text-center text-3xl my-4'>Your cart</h1>
                        <div className='flex flex-col flex-1 max-w-md sm:max-w-lg md:max-w-xl m-auto gap-4'>
                            {cart.map((product, index) => {
                                return (
                                    <div key={index} className='flex items-center justify-between h-full w-full'>

                                        <div className='basis-2/6 relative'>
                                            <img src={product.image} className='border-2 border-solid rounded-lg border-gray-200 shadow-sm h-full' />
                                            <div className='absolute top-0 -right-2 rounded-lg bg-blue-200' style={{ width: '20px', height: '20px' }}>
                                                <p style={{ position: 'absolute', right: '5px', top: '-2px' }}>{product.quantity}</p>
                                            </div>
                                        </div>

                                        <div className='p-4 flex flex-col'>
                                            <p className='font-bold'>{product.name}</p>
                                            <p className='text-gray-500 font-medium'>{product.gender}</p>
                                        </div>

                                        <div className='p-4 flex flex-col text-center'>
                                            <p>{product.price * product.quantity}€</p>
                                            <div className='flex gap-2 mt-2'>
                                                <button onClick={() => dispatch(increaseQuantity(product))} className='w-6 h-6 bg-gray-200'>+</button>
                                                <button onClick={() => dispatch(lowerQuantity(product))} className='w-6 h-6 bg-gray-200'>-</button>
                                                <button onClick={() => dispatch(removeFromCart(product))} className='w-6 h-6 bg-gray-200'>x</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='max-w-2xl m-auto mt-4 border-solid border-gray-300'>
                            <div className='border-2 border-solid border-gray-300' />
                            <div className='flex items-center justify-center p-4'>
                                <h1 className='text-2xl'>Total: {total}€</h1>
                            </div>
                            <div>
                            </div>
                            {/* <button onClick={() => navigate('/checkout', { state: { total, description } })}
            type="submit" class=" mb-4 flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Place order</button> */}
                            <button onClick={() => goForward()}
                                type="submit" className="flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Checkout</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default FirstStep