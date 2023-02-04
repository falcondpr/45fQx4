import React, { useState } from 'react'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import HeaderProfile from '../components/HeaderProfile'
import CardProduct from '../components/CardProduct'
import Layout from '../layout'
import { categories } from '../data/categories'
import ProfileAvatar from '../assets/avatar.svg'
import BannerHome from '../components/BannerHome'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [categorySelected, setCategorySelected] = useState<string>('todas')

  return (
    <Layout>
      <HeaderProfile navigate={navigate} userAvatar={ProfileAvatar} />

      <BannerHome />

      {/* Categories */}
      <Box mt="1.275rem">
        <Flex overflowX="auto" className="hide-scroll">
          {categories.map((category, index) => (
            <Button
              flex="1"
              minW="initial"
              w="full"
              bgColor={
                categorySelected === category.link ? 'primary' : 'light-primary'
              }
              color={categorySelected === category.link ? 'white' : 'primary'}
              fontWeight="medium"
              display="block"
              key={category.id}
              ml={index === 0 ? '1.25rem' : '0.625rem'}
              rounded="2px"
              mr={categories.length - 1 === index ? '1.25rem' : 0}
              onClick={() => setCategorySelected(category.link)}
              _focus={{ bgColor: 'primary' }}
              _active={{ bgColor: 'primary' }}
              _focusWithin={{ bgColor: 'primary' }}
              _focusVisible={{ bgColor: 'primary' }}
            >
              {category.name}
            </Button>
          ))}
        </Flex>
      </Box>

      {/* List Products */}
      <Box mt="1.3rem" p="0 1.25rem">
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

export default Home
