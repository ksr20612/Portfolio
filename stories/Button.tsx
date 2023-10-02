import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

// @@@ Button Variants
const getVariantClass = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary': {
      return 'bg-primary-500 text-mono-100';
    }
    case 'secondary': {
      return 'bg-mono-700 text-mono-100';
    }
    case 'tertiary': {
      return 'bg-mono-100 border-2 border-current text-primary-500 hover:bg-mono-200 hover:opacity-100';
    }
    case 'danger': {
      return 'bg-danger-500 text-mono-100';
    }
    case 'ghost': {
      return 'text-primary-500';
    }
    default: {
      return '';
    }
  }
};

const getSizeClass = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'medium': {
      return 'px-6 py-4';
    }
    case 'large': {
      return 'px-8 py-5';
    }
    default: {
      return 'px-6 py-4';
    }
  }
};

const getStateClass = (state: ButtonProps['state']) => {
  if (state === 'disabled') {
    return 'disabled:grayscale-[75%] disabled:opacity-80 cursor-not-allowed';
  }
  return '';
};

const BASE_BUTTON_CLASSES =
  'cursor-pointer border-0 font-normal leading-none inline-block box-border font-bold rounded-md hover:opacity-80 transition ease-in duration-150';
// @@@

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
  size?: 'large' | 'medium' | 'small';
  state?: 'active' | 'disabled';
  // icon?: boolean;
  label: string;
}

function Button({
  variant = 'primary',
  size = 'medium',
  state = 'active',
  // icon = 'false',
  label,
  ...props
}: ButtonProps) {
  const computedClasses = useMemo(() => {
    const variantClass = getVariantClass(variant);
    const sizeClass = getSizeClass(size);
    const stateClass = getStateClass(state);

    return [variantClass, sizeClass, stateClass].join(' ');
  }, [variant, size, state]);

  return (
    <button
      type="button"
      className={twMerge(BASE_BUTTON_CLASSES, computedClasses)}
      disabled={state === 'disabled'}
      {...props}>
      {label}
    </button>
  );
}

export default React.memo(Button);
