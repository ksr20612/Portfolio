'use client';

import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import developer from 'public/lotties/developer.json';

interface DeveloperProps {}

function Developer({}: DeveloperProps): ReactElement {
  const lottieRef = useRef<HTMLDivElement>(null);
  const lottieAnim = useRef<AnimationItem | null>(null);
  useLayoutEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: developer,
    });
    lottieAnim.current = anim;
    return () => {
      anim.destroy();
    };
  }, []);
  return <div key="developer_icon" ref={lottieRef} className="w-3/5" />;
}

export default Developer;
