import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { GiShoppingBag } from 'react-icons/gi'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = ({ setMenuOpen }) => {

    let navigate = useNavigate();
    const cartAmount = useSelector((state) => state.persistedReducer.cart.quantity)

    return (
        <>
            {/* sort out the fixed stuff laters */}
            <div className="my-2 p-4 px-6 w-full h-16 flex justify-between items-center">
                <div className='block sm:none text-sm transition hover:scale-125'>
                    <BiMenuAltLeft size={30} />
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className='text-1xl sm:text-4xl' style={title}>
                        <Link to={'/'}>
                            sneakers
                        </Link>
                    </div>
                    <div className="hidden sm:flex justify-between items-center text-center gap-4 cursor-pointer">
                        <Link to={'/store'}>
                            <p className='hover:underline'>Shop</p>
                        </Link>
                    </div>
                </div>
                <div className='text-sm flex items-center gap-2 relative transition hover:scale-125'>
                    <Link to={'/cart'}>
                        <GiShoppingBag size={30} />
                    </Link>
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