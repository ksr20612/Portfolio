import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'types/PropsWithChildren';
import ActionButtonProps from './ActionButtonProps';
import { getSizeClass, getActiveClass, BASE_BUTTON_CLASSES } from './getClass';

function ActionButton({
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
}: PropsWithChildren<ActionButtonProps>): ReactElement {
  return (
    <button
      type="button"
      id={id}
      className={twMerge([BASE_BUTTON_CLASSES, getSizeClass(size), getActiveClass(active)])}
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

export default React.memo(ActionButton);
