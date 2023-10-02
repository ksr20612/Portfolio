import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { BASE_BUTTON_CLASSES, getSizeClass } from './getClass';
import IconButtonProps from './IconButtonProps';

function IconButton({
  icon,
  size = 'medium',
  active = true,
  ariaDescribedBy,
  ariaLabel,
  id,
  className,
  onClick,
  tabIndex,
  ...props
}: IconButtonProps): ReactElement {
  return (
    <button
      type="button"
      id={id}
      className={twMerge([BASE_BUTTON_CLASSES, getSizeClass(size)])}
      disabled={!active}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      onClick={onClick}
      tabIndex={tabIndex}
      {...props}>
      {icon}
    </button>
  );
}

export default IconButton;
