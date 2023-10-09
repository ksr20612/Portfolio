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
      <Link href={src} className="float-right mb-2 text-[1.2rem] italic text-mono-700">
        {title}로 이동하기
      </Link>
      <iframe
        src={src}
        title={title}
        className={twMerge('w-full h-[400px] border-solid border-1 border-mono-900', className)}
        {...props}>
        <p className="text-[1.2rem]">
          현재 사용 중인 브라우저는 iframe을 지원하지 않습니다. <br />
          우측 상단의 링크를 누르면 페이지로 이동할 수 있습니다.
        </p>
      </iframe>
    </>
  );
}

export default Iframe;
