import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Title({
  className = '',
  children,
  ...props
}: PropsWithChildren<TitleProps>): ReactElement {
  return (
    <h2
      className={twMerge(
        'relative ml-[1.2rem] font-bold font-ubuntu text-mono-700 text-[2.0rem] tracking-wider before:content-[""] before:absolute before:inline-block before:w-1 before:h-[50px] before:-left-[1.2rem] before:bg-primary-500',
        className,
      )}
      {...props}>
      {children}
    </h2>
  );
}

export default Title;
