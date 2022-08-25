import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import useWindowSize from '../../hooks/useWindowSize';

const Menu = () => {

  const size = useWindowSize();

  return (
    <>
      {size < 768 ?
        <>
        
        </>
        :
        <>

        </>
      }
    </>
  )
}

const styles = {
  menu: {
    position: 'fixed',
    height: '-100vh',
    width: '100vw',
    backgroundColor: 'black'
  }
}

export default Menu