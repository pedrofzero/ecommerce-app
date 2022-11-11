import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../menu'
import { useSelector } from 'react-redux';
import { GiShoppingBag } from 'react-icons/gi'

const Header = ({ setMenuOpen }) => {

    let navigate = useNavigate();
    const cartAmount = useSelector((state) => state.persistedReducer.cart.quantity)

    return (
        <>
            {/* sort out the fixed stuff laters */}
            <div className="my-2 p-4 w-full h-16 flex justify-between items-center">
                <div className='text-sm'>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className='text-4xl' style={title}>
                        sneakers
                    </div>
                    <div class="flex justify-between items-center text-center gap-4 cursor-pointer">
                        <p>MEN</p>
                        <p>WOMEN</p>
                        <p>ACCESSORIES</p>
                    </div>
                </div>
                <div className='text-sm flex items-center gap-2 relative'>
                    <GiShoppingBag size={30} />
                    <div className='absolute top-0 left-4 rounded-xl bg-blue-400 w-4 text-center'>
                        {cartAmount}
                    </div>
                </div>
            </div>
            <div className='border-b-2 border-solid border-black'></div>
        </>
    )
}

const title = {
    fontSize: '2rem',
    fontFamily: 'Rubik Mono One',
}

export default Header