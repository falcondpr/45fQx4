import React from 'react'
import { Grid, GridProps } from '@chakra-ui/react'

interface BoxColorIprops extends GridProps {
  children?: React.ReactNode
}

const BoxColor: React.FC<BoxColorIprops> = ({ children, ...rest }) => {
  return (
    <Grid
      rounded="4px"
      placeItems="center"
      w="2.25rem"
      h="2.25rem"
      color="white"
      {...rest}
    >
      {children}
    </Grid>
  )
}

export default BoxColor
