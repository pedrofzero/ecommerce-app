import React from 'react'
import { Link } from 'react-router-dom'

const ShowProducts = ({ data }) => {
    return (
        <div className='grid grid-cols-6 gap-4 p-4 mt-4 text-center max-w-md sm:max-w-xl md:max-w-3xl m-auto'>
            {data.map(product => {
                return (
                    <div className='col-span-3 sm:col-span-3 md:col-span-2'>
                        <div key={product.id} className='hover:cursor-pointer flex flex-col items-center border-2 border-solid relative'>
                            <div className='bg-gray-200'>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} className='h-auto transition hover:scale-110' />
                                </Link>
                            </div>
                            <div className='absolute bottom-0 left-0 flex justify-center w-14 h-6 bg-gray-400'>
                                <p>{product.price} $</p>
                            </div>
                        </div>
                        <p>{product.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowProducts