import React from 'react'
import { Box, Grid } from '@chakra-ui/react'

import CardProduct from '../components/CardProduct'
import Layout from '../layout'
import InputUI from '../ui/Input'

const Search: React.FC = () => {
  return (
    <Layout p="1.25rem">
      <Box>
        <InputUI placeholder="Buscar productos" />
      </Box>

      {/* List Products */}
      <Box>
        <Grid
          gridTemplateColumns={{ base: 'repeat(2, 1fr)' }}
          gap={{ base: '1.5rem 1rem' }}
        >
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </Box>
    </Layout>
  )
}

export default Search
