import { EventFunc } from 'types/Event';
import { ReactElement } from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  /** 버튼 좌측 아이콘 */
  leftIcon?: ReactElement<any>;
  /** 버튼 우측 아이콘 */
  rightIcon?: ReactElement<any>;
}

export default ActionButtonProps;
