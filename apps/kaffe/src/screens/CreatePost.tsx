import React from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'

import { ButtonUI, InputUI, TextUI } from '../ui'
import BackButton from '../components/BackButton'
import { FaCamera, FaCheck } from 'react-icons/fa'

const CreatePost: React.FC = () => {
  const [isProductNew, setIsProductNew] = React.useState<boolean>(true)
  console.log(isProductNew)

  return (
    <Box p="1.25rem">
      <BackButton title="Crear post" />

      <Box mt="1.25rem">
        {/* Name */}
        <InputUI placeholder="Nombre del producto" />

        {/* Status */}
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
          <ButtonUI
            bgColor={isProductNew ? 'primary' : 'white'}
            color={isProductNew ? 'white' : 'primary'}
            onClick={() => setIsProductNew(true)}
          >
            Nuevo
          </ButtonUI>
          <ButtonUI
            bgColor={!isProductNew ? 'primary' : 'white'}
            color={!isProductNew ? 'white' : 'primary'}
            onClick={() => setIsProductNew(false)}
          >
            Usado
          </ButtonUI>
        </Grid>

        {/* Category */}
        <Box mt="1.25rem">
          <Select h="50px">
            <option value="">Seleccione categoria</option>
          </Select>
        </Box>

        <Box mt="1.25rem">
          <Textarea
            _placeholder={{ color: '#a9a9a9' }}
            resize="none"
            placeholder="Agregar una breve descripcion"
            pt="0.8rem"
            h="16rem"
            // rounded="3px"
            borderColor="border-color"
          ></Textarea>
        </Box>

        <Box mt="1.25rem">
          <TextUI color="primary" fontSize="1.1rem">
            Lista de imagenes
          </TextUI>

          <Box mt="0.7rem">
            <Button
              minW="initial"
              w="8rem"
              h="8rem"
              fontSize="2rem"
              bgColor="white"
              rounded="3px"
              border="1px dashed"
              borderColor="primary"
              color="#d9d9d9"
              display="grid"
              placeItems="center"
            >
              <FaCamera />
            </Button>
          </Box>
        </Box>

        <Box mt="1.25rem">
          <TextUI color="primary" fontSize="1.1rem">
            Etiquetas
          </TextUI>

          <Flex
            alignItems="center"
            css={{ div: { marginBottom: 0 }, label: { height: 0 } }}
            mt="0.7rem"
          >
            <Input
              borderColor="light-gray"
              h="3.125rem"
              mt="0"
              rounded="3px 0 0 3px"
              _focusVisible={{ shadow: 0 }}
            />
            <Button
              rounded="0 3px 3px 0"
              bgColor="primary"
              color="white"
              h="3.125rem"
              _focus={{ bgColor: 'primary' }}
            >
              <FaCheck />
            </Button>
          </Flex>

          <Flex mt="1rem" gap="0.8rem" flexWrap="wrap">
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">camiseta</TextUI>
            </Box>
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">prendas</TextUI>
            </Box>
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">azul</TextUI>
            </Box>
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">con cuello</TextUI>
            </Box>
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">nike</TextUI>
            </Box>
            <Box bgColor="secondary-gray" p="0.5rem 1rem" rounded="3px">
              <TextUI color="white">usado</TextUI>
            </Box>
          </Flex>
        </Box>

        <Box mt="1.25rem">
          <TextUI color="primary" fontSize="1.1rem">
            Precio
          </TextUI>

          <InputUI placeholder="Ejemplo: 240.000" />
        </Box>

        <Box my="1.25rem">
          <ButtonUI>Crear post</ButtonUI>
        </Box>
      </Box>
    </Box>
  )
}

export default CreatePost
