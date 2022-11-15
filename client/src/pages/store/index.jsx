import React from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import Header from '../../layout/header'

const Store = () => {
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