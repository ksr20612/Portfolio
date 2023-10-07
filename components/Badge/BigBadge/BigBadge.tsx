import React, { PropsWithChildren, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLDListElement> {
  icon: ReactElement;
  title: string;
  className?: string;
}

function Badge({ icon, title, className = '', children, ...props }: PropsWithChildren<BadgeProps>) {
  return (
    <dl
      className={twMerge(
        'w-[150px] min-h-[100px] flex flex-col justify-between items-center p-3 text-[1.2rem] rounded-md shadow-xl bg-mono-0 font-ubuntu',
        className,
      )}
      {...props}>
      <dt aria-label={title} className="w-full h-full flex justify-center p-3">
        {icon}
      </dt>
      <dd className="border-solid border-mono-200 border-t-2 w-full text-center pt-1">{title}</dd>
      {children && <dd className="text-[0.8rem] text-mono-600">{children}</dd>}
    </dl>
  );
}

export default Badge;
