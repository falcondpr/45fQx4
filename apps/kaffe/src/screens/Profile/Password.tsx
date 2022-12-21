import React from 'react'
import { Box } from '@chakra-ui/react'

import BackButton from '../../components/BackButton'
import Empty from '../../layout/Empty'
import ButtonUI from '../../ui/Button'
import InputUI from '../../ui/Input'

const Password: React.FC = () => {
  return (
    <Empty p="1.25rem">
      <BackButton title="Editar contraseña" />

      <Box mt="1rem">
        <InputUI placeholder="Editar contraseña" />
        <ButtonUI>Actualizar</ButtonUI>
      </Box>
    </Empty>
  )
}

export default Password
