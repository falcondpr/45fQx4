import React from 'react'
import { Grid } from '@chakra-ui/react'

import Empty from '../layout/Empty'
import CardProduct from '../components/CardProduct'
import BackButton from '../components/BackButton'

const PostSaved: React.FC = () => {
  return (
    <Empty p="1.25rem">
      <BackButton title="Posteos guardados" />

      <Grid
        py="1rem"
        gridTemplateColumns={{ base: 'repeat(2, 1fr)' }}
        gap={{ base: '1.5rem 1rem' }}
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
    </Empty>
  )
}

export default PostSaved
