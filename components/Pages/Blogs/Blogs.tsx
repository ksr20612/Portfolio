import Iframe from 'components/Iframe/Iframe';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';
import VelogIcon from 'public/icons/velog.svg';
import NaverIcon from 'public/icons/naver.svg';

interface BlogsProps {}

function Blogs({}: BlogsProps): ReactElement {
  return (
    <Section id="blogs">
      <Title className="mb-[20px]" lang="en">
        Blogs
      </Title>
      <div>
        <h3 className="flex items-center font-noto text-[1.4rem] font-bold">
          <VelogIcon width="30px" height="30px" className="inline-block mr-3 fill-[#20c997]" />
          테크 블로그
        </h3>
        <p className="text-[1.1rem] mt-3">
          개발하며 연구하고 고민한 것들, 우리말로 옮긴 것들을 기록합니다. <br />
          <Iframe src="https://velog.io/@ksr20612/" title="Velog" />
        </p>
        <h3 className="mt-10 flex items-center text-[1.4rem] font-bold">
          <NaverIcon width="30px" height="30px" className="inline-block mr-3" />
          기술 기반의 임상심리 연구 블로그
        </h3>
        <p className="text-[1.1rem] mt-3">
          인터넷 기반의 인지 행동 치료 프로그램들(icbt)을 연구하고 개발합니다. <br />
          관련 논문을 분석하고 기획-개발한 온라인 프로그램을 기록합니다. <br />
          <Iframe src="https://blog.naver.com/naivethan" title="Naver 블로그" />
        </p>
      </div>
    </Section>
  );
}

export default Blogs;
