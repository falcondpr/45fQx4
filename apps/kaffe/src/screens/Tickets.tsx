import React from 'react'
import { Box } from '@chakra-ui/react'

import BackButton from '../components/BackButton'
import Ticket from '../components/Ticket'

const Tickets: React.FC = () => {
  return (
    <Box p="1.25rem">
      <BackButton title="Tickets" />

      <Box mt="1rem">
        <Ticket />
        <Ticket />
      </Box>
    </Box>
  )
}

export default Tickets
