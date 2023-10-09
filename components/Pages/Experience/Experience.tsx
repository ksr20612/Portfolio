import IconButton from 'components/Button/IconButton/IconButton';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Link from 'components/Link/Link';
import MediazenIcon from 'public/mediazen.svg';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';

interface ExperienceProps {}

function Experience({}: ExperienceProps): ReactElement {
  return (
    <Section id="experience" colored>
      <Title className="mb-[20px]" lang="en">
        Work Experience
      </Title>
      <table className="w-full font-noto text-[1.1rem] table-auto border-collapse text-center border-b-[1px] border-mono-500 border-solid">
        <caption className="visually-hidden">
          개발자 유동연이 거쳐온 회사들과 해당 회사에서 수행한 업무 목록
        </caption>
        <thead className="text-[1.2rem] h-[50px] border-b-[1px] border-mono-500 border-solid">
          <tr>
            <th>회사</th>
            <th>직책</th>
            <th>업무</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[150px]">
            <td rowSpan={2}>
              <MediazenIcon className="m-auto" />
              <Link href="http://www.mediazen.co.kr/">(주)미디어젠</Link>
            </td>
            <td>
              에듀테크팀 <br />
              <div className="text-mono-600 text-[0.9rem]">프론트엔드 리드</div>
              <div className="text-mono-600 text-[0.9rem]">2023.01~</div>
            </td>
            <td>
              <ul className="list-disc w-4/5 m-auto text-start">
                <li>
                  <Link href="https://rockie-talkie.com">RockieTalkie</Link> 서비스 개발 및 운영
                </li>
                <li>에듀테크 신사업 기술 분석</li>
              </ul>
            </td>
            <td>
              <IconButton aria-label="상세 보기">
                <DescriptionOutlinedIcon fontSize="medium" id="description_icon" />
              </IconButton>
            </td>
          </tr>
          <tr className="h-[200px]">
            <td>
              선행개발팀 <br />
              <div className="text-mono-600 text-[0.9rem]">연구원</div>
              <div className="text-mono-600 text-[0.9rem]">2020.08~2022.12</div>
            </td>
            <td>
              <ul className="list-disc w-4/5 m-auto text-start">
                <li>STT, TTS 모델을 활용한 서비스 개발</li>
                <li>Web Audio Api 및 ffmpeg 활용한 음성 처리</li>
                <li>음성인식 키오스크 프론트엔드 개발</li>
                <li>MZ-ODC(수집툴) 개발 및 운영</li>
              </ul>
            </td>
            <td>
              <IconButton aria-label="상세 보기">
                <DescriptionOutlinedIcon fontSize="medium" id="description_icon" />
              </IconButton>
            </td>
          </tr>
        </tbody>
      </table>
      <span className="mt-5 text-[1.0rem]">
        👉 프로젝트별로 구성된 더 자세한 기록은{' '}
        <Link
          href="https://tabby-henley-bfa.notion.site/41e40d5784b44da28ef0fce99d0a3f4e?pvs=4"
          className="hover:underline"
          target="_blank">
          Notion
        </Link>{' '}
        에서 확인해주세요.
      </span>
    </Section>
  );
}

export default Experience;
