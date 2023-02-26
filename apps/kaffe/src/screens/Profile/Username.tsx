import React from 'react'
import { Box } from '@chakra-ui/react'

import BackButton from '../../components/BackButton'
import Empty from '../../layout/Empty'
import { InputUI, ButtonUI } from '../../ui'

const Email: React.FC = () => {
  return (
    <Empty p="1.25rem">
      <BackButton title="Editar nombre de usuario" />

      <Box mt="1rem">
        <InputUI placeholder="Editar nombre de usuario" />
        <ButtonUI>Actualizar</ButtonUI>
      </Box>
    </Empty>
  )
}

export default Email
