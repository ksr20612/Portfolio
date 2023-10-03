import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface SectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Section({
  children,
  className = '',
  ...props
}: PropsWithChildren<SectionProps>): ReactElement {
  return (
    <section className={twMerge('w-full max-w-[1200px] my-[50px] px-10', className)} {...props}>
      {children}
    </section>
  );
}

export default Section;
