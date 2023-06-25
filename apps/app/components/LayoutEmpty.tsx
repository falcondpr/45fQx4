'use client';

import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface ILayoutEmpty {
  children: React.ReactNode;
}

export default function LayoutEmpty({ children }: ILayoutEmpty) {
  const [deviceHeight, setDeviceHeight] = useState<number>(window.innerHeight);

  const handleResize = () => {
    setDeviceHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Box height={`${deviceHeight}px`}>{children}</Box>;
}
