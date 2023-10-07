import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import IntroImage from 'public/dongyeon.png';
import Link from 'components/Link/Link';

interface IntroProps {}

function Intro({}: IntroProps): ReactElement {
  return (
    <Section id="#intro" className="mt-[100px]">
      <Title className="mb-[20px]" lang="en">
        Intro
      </Title>
      <div className="flex items-center max-tablet:flex-col gap-[20px] min-h-[200px]">
        <Image
          src={IntroImage}
          alt="intro-image"
          width={150}
          height={150}
          sizes={'150px'}
          priority
        />
        <p className="text-mono-900 text-[1.1rem] font-noto leading-[1.75]">
          <strong className="text-[1.5rem] leading-[1.6rem]">개발하는 유동연입니다.</strong>
          <br />
          4년차 개발자로 React와 Typescript 진영에서 서비스를 설계, 배포, 운영해오고 있습니다.
          <br />
          지금은{' '}
          <Link href="https://www.rockie-talkie.com" className="hover:underline" target="_blank">
            RockieTalkie
          </Link>{' '}
          의 프론트엔드를 리딩하고 있습니다.
          <br /> <br />
          프론트엔드 개발자로서는 더 많은 사용자를 배려하는 인클루시브한 디자인과 코드를 지향합니다.
          <br />
          개발 서적과 아티클 읽는 것을 좋아합니다.
        </p>
      </div>
    </Section>
  );
}

export default Intro;
