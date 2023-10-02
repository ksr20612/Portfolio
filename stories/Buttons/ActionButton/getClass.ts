import ActionButtonProps from './ActionButtonProps';

export const BASE_BUTTON_CLASSES =
  'cursor-pointer border-2 border-mono-300 flex justify-center items-center gap-[10px] bg-mono-0 font-normal leading-none box-border font-bold rounded-full hover:opacity-80 transition ease-in duration-150 active:scale-[0.95]';
export const getSizeClass = (size: ActionButtonProps['size']) => {
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

export const getActiveClass = (active: ActionButtonProps['active']) => {
  if (!active) {
    return 'disabled:grayscale-[75%] disabled:opacity-80 cursor-not-allowed disabled:text-mono-500';
  }
  return '';
};
