import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { EventFunc } from 'types/Event';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick: EventFunc;
}

function ActionButton({
  className = '',
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...props
}: PropsWithChildren<ActionButtonProps>): ReactElement {
  return (
    <button
      type="button"
      className={twMerge(
        'flex justify-center rounded-full text-primary-500 active:bg-mono-200 items-center gap-2 text-[1.2rem] border-[1px] border-solid border-primary-500 px-4',
        className,
      )}
      onClick={onClick}
      {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}

export default ActionButton;
