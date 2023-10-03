'use client';

import React, { ReactElement } from 'react';
import { IconButton as Button, IconButtonProps as ButtonProps } from '@mui/material';
import { PropsWithChildren } from 'types/PropsWithChildren';
import { twMerge } from 'tailwind-merge';
// import { SvgIconComponent } from '@mui/icons-material';

interface IconProps extends ButtonProps {
  className?: string;
}

function IconButton({
  className = '',
  children,
  ...props
}: PropsWithChildren<IconProps>): ReactElement {
  return (
    <Button className={twMerge('text-[1.6rem]', className)} sx={{ color: '#15749d' }} {...props}>
      {children}
    </Button>
  );
}

export default React.memo(IconButton);
