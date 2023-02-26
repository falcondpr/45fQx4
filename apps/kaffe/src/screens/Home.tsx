import React, { useState } from 'react'
import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaInfo } from 'react-icons/fa'

import HeaderProfile from '../components/HeaderProfile'
import CardProduct from '../components/CardProduct'
import Layout from '../layout'
import { TextUI } from '../ui'
import { categories } from '../data/categories'
import FallbackImage from '../assets/fallback-image.png'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [categorySelected, setCategorySelected] = useState<string>('todas')

  // React.useEffect(() => {
  //   const env = import.meta.env.VITE_API_ENDPOINT
  //   console.log(env)
  // }, [])

  return (
    <Layout>
      <HeaderProfile
        navigate={navigate}
        userAvatar={'https://bit.ly/3FpDJGG'}
      />

      <Box position="relative">
        <Box
          bgImage="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 80%)"
          h="full"
          w="full"
          position="absolute"
          left="0"
        />

        <TextUI
          color="white"
          pl="20px"
          // mb="10px"
          position="absolute"
          bottom="0.75rem"
          left="0"
        >
          Marca ropa, verano
        </TextUI>
        <Image
          w="full"
          shadow="xl"
          h="14rem"
          objectFit="cover"
          objectPosition="center"
          src="https://bit.ly/3GMtXhB"
          fallbackSrc={FallbackImage}
          alt="Banner ad"
        />
        <Button
          rounded="full"
          display="grid"
          placeItems="center"
          minW="initial"
          w="2.5rem"
          h="2.5rem"
          color="primary"
          bgColor="white"
          fontSize="1rem"
          position="absolute"
          bottom="1rem"
          right="1rem"
        >
          <FaInfo />
        </Button>
      </Box>

      {/* Categories */}
      <Box mt="1.875rem">
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
