import { EventFunc } from 'types/Event';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 크기 */
  size?: 'large' | 'medium' | 'small';
  /** 버튼의 활성화 여부 */
  active?: boolean;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  id?: string;
  className?: string;
  onClick?: EventFunc;
  tabIndex?: number;
  icon: any;
}

export default IconButtonProps;
