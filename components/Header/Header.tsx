'use client';

import Link from 'components/Link/Link';
import Hamburger from 'components/Button/MenuButton/MenuButton';
import Catalog from 'components/Catalog/Catalog';
import { useRecoilState } from 'recoil';
import catalogOnState from 'stores/catalogOnState';
import React, { useEffect, useRef } from 'react';

function Header() {
  const [isOn, setIsOn] = useRecoilState(catalogOnState);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (isOn) {
      ref.current?.focus();
    }
  }, [isOn]);

  return (
    <header className={`sticky flex justify-center left-0 z-50 w-full bg-primary-600`} lang="en">
      <div
        className="fixed flex justify-center left-0 z-50 w-full bg-inherit"
        tabIndex={0}
        ref={ref}
        onBlur={e => {
          if (e.relatedTarget?.getAttribute('id') === 'Logo' || !e.relatedTarget) {
            setIsOn(false);
          }
        }}>
        <div
          className={`relative w-full flex justify-between items-center px-[3%] max-tablet:px-[48px] py-[16px] z-50 text-mono-100`}>
          <Link
            href="/"
            className="font-black text-[1.8rem] max-tablet:text-[1.4rem]"
            id="Logo"
            aria-label="Dong Yeon Yu's Porfolio">
            Dong Yeon
          </Link>
          <nav className="flex items-center gap-[24px] font-ubuntu max-tablet:hidden">
            <Link
              href="#about"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              About
            </Link>
            <Link
              href="#experience"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              Work Experience
            </Link>
            <Link
              href="#projects"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              Skills
            </Link>
            <Link
              href="#blogs"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              Blogs
            </Link>
            <Link
              href="#contact"
              className="hover:text-danger-100 transition-color ease-in-out duration-300">
              Contact
            </Link>
          </nav>
          <Hamburger className="hidden max-tablet:inline-block" />
        </div>
        <Catalog className="pt-[100px] z-30" />
      </div>
    </header>
  );
}

export default React.memo(Header);
