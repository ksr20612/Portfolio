import React from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';
import { BASE_BUTTON_CLASSES, getSizeClass, getStateClass, getVariantClass } from './getClass';
import ButtonProps from './ButtonProps';

function Button({
  kind = 'primary',
  size = 'medium',
  active = true,
  children,
  ariaDescribedBy,
  ariaLabel,
  id,
  className,
  onClick,
  tabIndex,
  leftIcon,
  rightIcon,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      id={id}
      className={twMerge([
        BASE_BUTTON_CLASSES,
        getVariantClass(kind),
        getSizeClass(size),
        getStateClass(active),
      ])}
      disabled={!active}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      onClick={onClick}
      tabIndex={tabIndex}
      {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default React.memo(Button);
