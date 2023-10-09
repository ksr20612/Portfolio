import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface SectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  colored?: boolean;
  className?: string;
}

function Section({
  colored = false,
  children,
  className = '',
  ...props
}: PropsWithChildren<SectionProps>): ReactElement {
  return (
    <section
      className={twMerge(
        'w-full min-h-[300px] my-[50px] px-10 py-[50px] m-auto',
        colored ? 'bg-mono-200' : 'transparent',
        className,
      )}
      {...props}>
      <div className="max-w-[1200px] m-auto">{children}</div>
    </section>
  );
}

export default Section;
