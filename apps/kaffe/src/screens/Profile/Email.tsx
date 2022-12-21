import React from 'react'
import { Box } from '@chakra-ui/react'

import BackButton from '../../components/BackButton'
import Empty from '../../layout/Empty'
import InputUI from '../../ui/Input'
import ButtonUI from '../../ui/Button'

const Email: React.FC = () => {
  return (
    <Empty p="1.25rem">
      <BackButton title="Editar correo" />

      <Box mt="1rem">
        <InputUI placeholder="Editar correo" />
        <ButtonUI>Actualizar</ButtonUI>
      </Box>
    </Empty>
  )
}

export default Email
