import React, { useState } from 'react'
import { MdFilterList } from 'react-icons/md'

const Filter = () => {

    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setFilterOpen(!filterOpen)} style={{ borderWidth: '1px' }} className='relative h-10 w-full flex justify-center items-center text-center border-solid border-gray-500 hover:cursor-pointer active:bg-gray-300'>
                <div className='flex items-center gap-2'>
                    <MdFilterList size={20} />
                    <p>Filter</p>
                </div>
            </div>
            <div className={`${!filterOpen ? 'overflow-hidden h-0' : 'block h-fit transition'}`}>
                <div className='flex flex-col gap-2 mt-2'>
                    <p>Men</p>
                    <div className='border-solid border-gray-200 hover:cursor-pointer' style={{ borderWidth: '1px' }} />
                    <p>Women</p>
                    <div className='border-solid border-gray-200 hover:cursor-pointer' style={{ borderWidth: '1px' }} />
                </div>
            </div>
        </div>
    )
}

export default Filter