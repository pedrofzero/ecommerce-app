import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import Header from '../../layout/header'
import Spinner from '../../components/Spinner'
import { allProductsFetch } from '../../redux/api'
import ShowProducts from '../../components/ShowProducts'

const Store = () => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const products = useSelector((state) => state.persistedReducer.products.allProducts)

    useEffect(() => {
        const fetchAll = () => {
            dispatch(allProductsFetch())
            setLoading(false)
        }
        fetchAll()
    }, [])

    return (
        <div>
            {loading ?
                <div className='absolute inset-1/2'>
                    <Spinner />
                </div>
                :
                <>
                    <Header />
                    <div className='max-w-sm m-auto'>
                        {/* <Search /> */}
                        <h1 className='text-3xl text-center my-6'>Shop</h1>
                        <div className='my-4' />
                        {/* <Filter /> */}
                    </div>
                    <ShowProducts data={products}/>
                    
                </>
            }
        </div>
    )
}

export default Store