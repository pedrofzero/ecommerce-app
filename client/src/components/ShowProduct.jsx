import React, { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner'

const ShowProduct = ({ title, data }) => {

  const size = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="mt-8 max-w-7xl p-4 m-auto">
      <h1 className='text-4xl'>
        {title}
      </h1>
      <div className='border-2 border-solid border-black my-4'></div>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
        {!data ? <Spinner /> :
          data.filter((item, index) => index < 3).map((product, index) => {
            return (
              <div>
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
          })
        }
      </div>
    </div>
  )
}

export default ShowProduct