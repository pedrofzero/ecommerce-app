import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
// import { gsap } from 'gsap'

const Menu = () => {

  const menuRef = useRef();

  // useEffect(() => {
  //   gsap.to(menuRef.current, {height: '100vh', duration: 1})
  // }, [])

  return (
    <>
    <Box ref={menuRef} style={styles.menu}>
      <Box style={styles.links}>
        
      </Box>
    </Box>
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