import { Box } from '@mui/material'
import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <Box sx={styles.layout}>
      <main>{children}</main>
    </Box>
  )
}

const styles = {
  layout: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
  }
}

export default AppLayout