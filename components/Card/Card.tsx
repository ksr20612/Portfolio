'use client';

import ActionButton from 'components/Button/ActionButton/ActionButton';
import Modal from 'components/Modal/Modal';
import Image, { StaticImageData } from 'next/image';
import React, { ReactElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import LensIcon from 'public/icons/lens.svg';

interface CardProps extends React.HTMLAttributes<HTMLDListElement> {
  image: StaticImageData;
  title: string;
  className?: string;
  contents: ReactElement;
}

function Card({ image, title, className = '', contents, ...props }: CardProps): ReactElement {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <dl
        className={twMerge(
          'group rounded-md relative text-center gap-5 w-[300px] h-[400px] flex flex-col items-center justify-center p-5 font-ubuntu shadow-xl overflow-hidden',
          className,
        )}
        {...props}>
        <Image
          src={image}
          width={300}
          height={400}
          sizes="400px"
          className="absolute top-50 left-0 group-hover:opacity-30 transition ease-in-out duration-150 group-hover:scale-110"
          alt={`${title} 이미지`}
        />
        <dt
          className="opacity-0 group-hover:opacity-100 group-hover:text-mono-900 transition ease-in-out duration-150"
          aria-label={title}>
          {title}
        </dt>
        <dd className="z-10 opacity-0 group-hover:opacity-100 group-hover:text-mono-900 transition ease-in-out duration-150">
          <ActionButton
            leftIcon={<LensIcon width="0.9em" height="0.9em" />}
            onClick={() => setIsOpened(true)}
            className="text-mono-900 border-mono-900 z-10">
            상세 보기
          </ActionButton>
        </dd>
      </dl>
      <Modal title={title} open={isOpened} handleClose={() => setIsOpened(false)}>
        {contents}
      </Modal>
    </>
  );
}

export default Card;
