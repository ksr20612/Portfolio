import ButtonProps from './ButtonProps';

export const BASE_BUTTON_CLASSES =
  'cursor-pointer border-0 font-normal leading-none flex justify-center items-center gap-[10px] box-border font-bold rounded-md hover:opacity-80 transition ease-in duration-150 active:scale-[0.95]';
export const getVariantClass = (kind: ButtonProps['kind']) => {
  switch (kind) {
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
export const getSizeClass = (size: ButtonProps['size']) => {
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
export const getStateClass = (state: ButtonProps['active']) => {
  if (!state) {
    return 'disabled:grayscale-[75%] disabled:opacity-80 cursor-not-allowed';
  }
  return '';
};
