import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getShirts } from '../../api'

const Products = () => {

    const params = useParams();

    useEffect(() => {
        
    })

    return (
        <>
         <p>Sup!</p>
         <button>Press me!</button>
        </>
    )
}

export default Products