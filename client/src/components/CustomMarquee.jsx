import React from 'react'
import Marquee from 'react-fast-marquee'

const CustomMarquee = ({ speed, text }) => {
    return (
        <Marquee speed="150">
            <div className='text-6xl'>
                {text.map((item, index) => {
                    return (
                        <>
                            <span key={index} style={{ paddingRight: '40px' }}>{item} -</span>
                        </>
                    )
                })}
            <div className="py-8" />
            </div>
        </Marquee>
    )
}

export default CustomMarquee