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
    <header className={`fixed flex justify-center left-0 z-50 w-full bg-mono-700`}>
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
          <Link href="/" className="font-black text-[1.8rem] max-tablet:text-[1.4rem]" id="Logo">
            <h1 aria-label="Dong Yeon Yu's Porfolio">Dong Yeon</h1>
          </Link>
          <div className="flex items-center gap-[24px] font-ubuntu max-tablet:hidden">
            <Link href="#intro">Intro</Link>
            <Link href="#experience">Work Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#certificates">Certificates</Link>
            <Link href="#blogs">Blogs</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <Hamburger className="hidden max-tablet:inline-block" />
        </div>
        <Catalog className="pt-[100px] z-30" />
      </div>
    </header>
  );
}

export default React.memo(Header);
