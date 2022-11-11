import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bestSellersFetch } from '../redux/api';
import { Grid, Stack, CardMedia } from '@mui/material'
import useWindowSize from '../hooks/useWindowSize'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const BestSellers = () => {

    const size = useWindowSize();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.persistedReducer.products.bestSellers)


    useEffect(() => {
        dispatch(bestSellersFetch());
        setLoading(false)

    }, [])

    return (
        <div className="mt-8 max-w-7xl p-4 m-auto">
            <h1 className='text-4xl'>
                Best Sellers
            </h1>
            <div className='border-2 border-solid border-black my-4'></div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                {!loading &&
                    bestSellers.map((product, index) => {
                        return (
                            <>
                                <div key={product.id} className='hover:cursor-pointer flex flex-col items-center bg-gray-200 h-96 border-2 border-solid relative hover:border-blue-500'>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.image} className='h-full' />
                                    </Link>
                                    <div className='absolute bottom-0 left-0 flex justify-center w-14 h-6 bg-gray-400'>
                                        <p>{product.price} $</p>
                                    </div>
                                    <p className="mt-4">
                                        {product.name}
                                    </p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellers