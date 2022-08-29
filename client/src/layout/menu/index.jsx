import React, { useEffect, useRef } from 'react'
import { Box, Stack } from '@mui/material'
import useWindowSize from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../../assets/icons/x.svg'


const Menu = ({ menuOpen, setMenuOpen }) => {

  const size = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      {size < 768 ?
        <>
          <Box sx={menuOpen ? styles.open : styles.closed}>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 4 }}>
              <Stack direction='row' spacing={2} sx={{ my: 2 }} onClick={() => setMenuOpen(false)}>
                <h2>Close</h2>
              </Stack>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 4, pt: 8 }}>
              <Stack direction='column' spacing={4}>
                <h1 onClick={() => navigate('/collections/all')}>Shop</h1>
                <h1>Shop</h1>
              </Stack>
            </Box>
          </Box>
        </>
        :
        <>
          <Box sx={menuOpen ? styles.open : styles.closed}>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 4 }}>
              <Stack direction='row' spacing={2} sx={{ my: 2 }} onClick={() => setMenuOpen(false)}>
                <h1>Close</h1>
              </Stack>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 4, pt: 8 }}>
              <Stack direction='column' spacing={4}>
                <h1 onClick={() => navigate('/collections/all')}>Shop</h1>
                <h1>Shop</h1>
              </Stack>
            </Box>
          </Box>
        </>
      }
    </>
  )
}

const styles = {
  open: {
    zIndex: 3,
    position: 'fixed',
    height: '100%',
    width: `${window.innerWidth < 768 ? '50%' : '30%'}`,
    backgroundColor: '#545b66',
    transition: '1s width ease-in-out'
  },

  closed: {
    zIndex: 15,
    position: 'fixed',
    height: '100%',
    width: '25%',
    backgroundColor: '#545b66'
  }

}

export default Menu