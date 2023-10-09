import Link from 'components/Link/Link';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  title: string;
  className?: string;
}

function Iframe({ src, title, className = '', ...props }: IframeProps): ReactElement {
  return (
    <>
      <Link
        href={src}
        className="float-right mb-2 text-[1.0rem] text-mono-700 font-medium hover:underline">
        👉 {title}로 이동하기
      </Link>
      <iframe
        src={src}
        title={title}
        className={twMerge('w-full h-[400px] border-solid border-1 border-mono-900', className)}
        {...props}
      />
    </>
  );
}

export default Iframe;
