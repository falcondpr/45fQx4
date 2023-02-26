import React from 'react'
import { Box } from '@chakra-ui/react'

import BackButton from '../../components/BackButton'
import Empty from '../../layout/Empty'
import { ButtonUI, InputUI } from '../../ui'

const Password: React.FC = () => {
  return (
    <Empty p="1.25rem">
      <BackButton title="Editar contraseña" />

      <Box mt="1rem">
        <InputUI placeholder="Editar contraseña" />
        <InputUI placeholder="Confirmar contraseña" />
        <ButtonUI>Actualizar</ButtonUI>
      </Box>
    </Empty>
  )
}

export default Password
