import React from 'react'
import Navbar from './navbar'
import { Box } from '@chakra-ui/react'

function NewHero({ children }) {
  return (
    <Box
      bg="#000000" h={{ md: '56.5rem', '2xl': '56.5rem' }} w='100%'

      bgImage="url('/herobg.png')"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <div><Navbar /></div>

      {children}

    </Box>
  )
}

export default NewHero