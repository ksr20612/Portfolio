'use client';

import { RecoilRoot } from 'recoil';
import React, { ReactElement } from 'react';
import { PropsWithChildren } from '@/types/PropsWithChildren';

interface RecoilProps {}

function Recoil({ children }: PropsWithChildren<RecoilProps>): ReactElement {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default Recoil;
