import React, { ReactElement } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}

function Anchor({
  href,
  className = '',
  children,
  ...props
}: PropsWithChildren<LinkProps>): ReactElement {
  return (
    <Link
      href={href}
      className={twMerge('text-base font-bold text-[1.0rem] text-center', className)}
      {...props}>
      {children}
    </Link>
  );
}

export default Anchor;
