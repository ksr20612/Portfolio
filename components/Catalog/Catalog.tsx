'use client';

import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import catalogOnState from 'stores/catalogOnState/index';
import Link from 'components/Link/Link';

interface CatalogProps {
  className?: string;
}

function Catalog({ className = '' }: CatalogProps): ReactElement {
  const [isOn, setIsOn] = useRecoilState(catalogOnState);
  const onClick = () => setIsOn(false);
  return (
    <AnimatePresence>
      {isOn && (
        <motion.ul
          id="catalog"
          className={twMerge(
            classNames(
              'hidden max-tablet:inline-block p-10 absolute w-full font-noto bg-[#05062480] focus:outline-none text-mono-100',
              className,
            ),
          )}
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          exit={{ opacity: 0, transform: 'translateY(-100%)' }}>
          <li className="mb-[20px]" onClick={e => e.stopPropagation()}>
            <Link
              href="#intro"
              className="text-[1.2rem] max-mobile:text-[1.2rem]"
              onClick={onClick}>
              About
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              href="#experience"
              className="text-[1.2rem] max-mobile:text-[1.2rem]"
              onClick={onClick}>
              Work Experience
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              href="#projects"
              className="text-[1.2rem] max-mobile:text-[1.8rem]"
              onClick={onClick}>
              Projects
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              href="#skills"
              className="text-[1.2rem] max-mobile:text-[1.2rem]"
              onClick={onClick}>
              Skills
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              href="#blogs"
              className="text-[1.2rem] max-mobile:text-[1.2rem]"
              onClick={onClick}>
              Blogs
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              href="#contact"
              className="text-[1.2rem] max-mobile:text-[1.2rem]"
              onClick={onClick}>
              Contact
            </Link>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default React.memo(Catalog);
