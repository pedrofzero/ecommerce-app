import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import useWindowSize from '../../hooks/useWindowSize'
import Header from '../../layout/header'
import { Link, Navigate } from 'react-router-dom'
import { increaseQuantity, lowerQuantity, removeFromCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import SadCart from '../../assets/cart-empty.png'
import Checkout from '../checkout'

const Cart = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const size = useWindowSize();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
  const total = useSelector((state) => state.persistedReducer.cart.total)

  const description = cart.map(product => product.name).join(', ')

  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      {cart.length == 0 ?
        <div>
          <h1 className='text-center text-3xl my-4'>Oops, you have no items added to your cart!</h1>
          <img src={SadCart} className='m-auto' />
          <button type="submit" class="my-4 flex m-auto text-md bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">Go shopping</button>
        </div>
        :
        <div>
          <h1 className='text-center text-3xl my-4'>Your cart</h1>

          <div className='flex flex-col flex-1 max-w-sm md:max-w-2xl m-auto gap-4'>
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
                    <p>{product.quantity}</p>
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
          <div className='max-w-2xl m-auto mt-4 border-b-2 border-solid border-gray-300'>
            <div className='border-2 border-solid border-gray-300' />
            <div className='flex items-center justify-center p-4'>
              <h1 className='text-2xl'>Total: {total}€</h1>
            </div>
            <div>
            </div>
            <button onClick={() => navigate('/checkout', { state: { total, description } })}
            type="submit" class=" mb-4 flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">Place order</button>
        </div>
        </div>
      }

    </>
  )
}

export default Cart