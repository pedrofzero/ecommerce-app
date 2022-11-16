import React from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import Header from '../../layout/header'
import { useLocation } from 'react-router-dom'

const Store = () => {
    const { state } = useLocation();
    console.log(state)

    return (
        <div>
            <Header />
            <Search />
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 text-center max-w-sm m-auto'>
                <Filter />
            </div>
        </div>
    )
}

export default Store