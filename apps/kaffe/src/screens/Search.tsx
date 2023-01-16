import React from 'react'
import { Box, Grid } from '@chakra-ui/react'

import CardProduct from '../components/CardProduct'
import Layout from '../layout'
import InputUI from '../ui/Input'
import BackButton from '../components/BackButton'

const Search: React.FC = () => {
  return (
    <Layout p="1.25rem">
      <BackButton title="Buscar productos" route="/" />

      <Box mt="1.25rem">
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
