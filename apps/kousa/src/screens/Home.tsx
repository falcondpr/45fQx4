import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import HeaderProfile from '../components/HeaderProfile'
import { categories } from '../data/categories'
import ButtonUI from '../ui/Button'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [categorySelected, setCategorySelected] = useState<string>('todas')

  return (
    <Box>
      <HeaderProfile
        navigate={navigate}
        userAvatar={'https://bit.ly/3FpDJGG'}
      />

      <Box px="1.25rem">
        <Image
          rounded="0.375rem"
          w="full"
          boxShadow="4px 4px 12px rgba(0, 0, 0, 0.52)"
          h="10rem"
          objectFit="cover"
          objectPosition="top"
          src="https://bit.ly/3FnuneC"
          alt=""
        />
      </Box>

      <Box mt="1.875rem">
        <Flex overflowX="auto" className="hide-scroll">
          {categories.map((category, index) => (
            <ButtonUI
              border="2px solid transparent"
              bgColor={categorySelected === category.link ? 'primary' : 'white'}
              color={categorySelected === category.link ? 'white' : 'primary'}
              borderColor={
                categorySelected !== category.link ? 'primary' : 'transparent'
              }
              display="block"
              key={category.id}
              ml={index === 0 ? '1.25rem' : '0.625rem'}
              rounded="2px"
              mr={categories.length - 1 === index ? '1.25rem' : 0}
              onClick={() => setCategorySelected(category.link)}
              _focus={{}}
            >
              {category.name}
            </ButtonUI>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
