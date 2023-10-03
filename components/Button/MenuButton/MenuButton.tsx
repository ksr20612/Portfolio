'use client';

import React, { ReactElement, useEffect, useLayoutEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';
import burgerButton from 'public/lotties/hamburger.json';
import catalogOnState from 'stores/catalogOnState/index';

interface HamburgerProps {
  className?: string;
}

function Hamburger({ className = '' }: HamburgerProps): ReactElement {
  const lottieRef = useRef<HTMLDivElement>(null);
  const lottieAnim = useRef<AnimationItem | null>(null);
  useLayoutEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: burgerButton,
    });
    lottieAnim.current = anim;
    return () => {
      anim.destroy();
    };
  }, []);

  const [isOn, setIsOn] = useRecoilState(catalogOnState); // recoil
  const open = (anim: AnimationItem) => {
    anim.playSegments([0, 70], true);
  };
  const close = (anim: AnimationItem) => {
    anim.playSegments([70, 140], true);
  };
  const handleClick = () => {
    setIsOn(prev => !prev);
  };

  useEffect(() => {
    const anim = lottieAnim.current;
    if (!anim) return;
    if (isOn) {
      open(anim);
    } else {
      close(anim);
    }
  }, [isOn]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(className)}
      aria-haspopup
      aria-controls="#catalog"
      aria-expanded={!!isOn}
      aria-label={isOn ? '메뉴 닫기' : '메뉴 열기'}>
      <div key={'menu_icon'} ref={lottieRef} className="cursor-pointer w-[40px] h-[40px]" />
    </button>
  );
}

export default Hamburger;
