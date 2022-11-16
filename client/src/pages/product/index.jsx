import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProductFetch } from '../../redux/api'
import { addToCart } from '../../redux/cartSlice'
import Header from '../../layout/header'
import Spinner from '../../components/Spinner'

const SingleProduct = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);

    // get product id
    const params = useParams();
    const id = params.id

    const currentProduct = useSelector((state) => state.persistedReducer.products.currentProduct)

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await dispatch(singleProductFetch(id));
            setLoading(false)
        }
        fetchProduct();

    }, [])

    const handleAddToCart = () => {
        dispatch(addToCart(currentProduct))
    }

    return (
        <>
            <Header />
            {loading ?
                <div className='absolute inset-1/2'>
                    <Spinner />
                </div>
                :
                <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
                    <div className='flex m-auto items-center'>
                        <div className='bg-gray-200'>
                            <img src={currentProduct.image} className='w-full h-auto' />
                        </div>
                    </div>
                    <div className='mt-4 text-2xl max-w-md m-auto'>
                        <h1 className='text-center'>{currentProduct.name}</h1>
                        <div className='border-2 border-solid border-gray-300 max-w-md w-24 mt-2 m-auto' />
                        <p className='p-4 text-2xl text-center font-light'>{currentProduct.price} €</p>
                        <div className='text-base p-4 mt-4'>
                            <p>{currentProduct.description}</p>
                        </div>
                        <div className='border-2 border-black border-solid h-12 w-64 rounded-lg text-center flex items-center justify-center m-auto mt-4 hover:bg-gray-200 hover:cursor-pointer transition active:'>
                            <button onClick={() => handleAddToCart(currentProduct.id)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default SingleProduct