import React from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface SmallBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

function SmallBadge({ className = '', children, ...props }: PropsWithChildren<SmallBadgeProps>) {
  return (
    <span
      className={twMerge(
        'p-2 px-4 text-[1.1rem] rounded-full bg-mono-0 font-ubuntu border-solid border-2 border-mono-300 text-center',
        className,
      )}
      {...props}>
      {children}
    </span>
  );
}

export default SmallBadge;
