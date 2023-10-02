import IconButtonProps from './IconButtonProps';

export const BASE_BUTTON_CLASSES =
  'cursor-pointer border-0 font-normal leading-none flex justify-center items-center gap-[10px] box-border font-bold rounded-md hover:opacity-80 transition ease-in duration-150 active:scale-[0.95]';
export const getSizeClass = (size: IconButtonProps['size']) => {
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
