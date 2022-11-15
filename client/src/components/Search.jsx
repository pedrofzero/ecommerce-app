import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return (
        <div>
            <div className='flex items-center max-w-sm m-auto text-center mt-4 h-8 border-2 border-solid border-gray-300 rounded-lg relative'>
                <div className='w-80'>
                    <input type='text' className='w-full'/>
                    {/* <div className='absolute border-l-2 h-6 border-solid border-gray-300 right-8 w-20'>
                    </div> */}
                </div>
                <div className='grow relative border-l-2 border-solid h-6 border-gray-300'>
                    <AiOutlineSearch size={20} className='absolute' style={{ top: '3px', left: '18px' }} />
                </div>

            </div>
        </div>

    )
}

export default Search