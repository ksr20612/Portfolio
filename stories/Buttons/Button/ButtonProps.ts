import { EventFunc } from 'types/Event';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 형태 */
  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
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
  /** 버튼 좌측 아이콘(ReactComponent) */
  leftIcon?: any;
  /** 버튼 우측 아이콘(ReactComponent) */
  rightIcon?: any;
}

export default ButtonProps;
