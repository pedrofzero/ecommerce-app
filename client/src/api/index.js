import React from 'react'
import axios from 'axios'

export const getShirts = () => {
    axios.get("http://localhost:3000/getShirts")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}
