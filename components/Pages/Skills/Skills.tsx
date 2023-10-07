import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';
import JsIcon from 'public/icons/skills/javascript.svg';
import TsIcon from 'public/icons/skills/typescript.svg';
import ReactIcon from 'public/icons/skills/react.svg';
import NextIcon from 'public/icons/skills/nextjs.svg';
import NodeIcon from 'public/icons/skills/nodejs.svg';
import Badge from 'components/Badge/BigBadge/BigBadge';
import SmallBadge from 'components/Badge/SmallBadge/SmallBadge';

interface SkillProps {}

function Skill({}: SkillProps): ReactElement {
  return (
    <Section id="skills" colored>
      <Title className="mb-[20px]" lang="en">
        Skills
      </Title>
      <ul className="flex gap-5 flex-wrap" aria-label="major">
        <li>
          <Badge icon={<JsIcon width="100px" height="100px" />} title="Javascript">
            ES6~
          </Badge>
        </li>
        <li>
          <Badge icon={<TsIcon width="100px" height="100px" />} title="Typescript">
            -
          </Badge>
        </li>
        <li>
          <Badge icon={<ReactIcon width="100px" height="100px" />} title="React">
            -
          </Badge>
        </li>
        <li>
          <Badge icon={<NextIcon width="100px" height="100px" />} title="NextJs">
            ^13
          </Badge>
        </li>
        <li>
          <Badge icon={<NodeIcon width="100px" height="100px" />} title="NodeJs">
            -
          </Badge>
        </li>
      </ul>
      <ul aria-label="minor" className="flex gap-5 mt-10 flex-wrap">
        <li>
          <SmallBadge>RTK</SmallBadge>
        </li>
        <li>
          <SmallBadge>React-query</SmallBadge>
        </li>
        <li>
          <SmallBadge>Jest</SmallBadge>
        </li>
        <li>
          <SmallBadge>Storybook</SmallBadge>
        </li>
        <li>
          <SmallBadge>PlayWright</SmallBadge>
        </li>
        <li>
          <SmallBadge>Styled-components</SmallBadge>
        </li>
        <li>
          <SmallBadge>TailwindCss</SmallBadge>
        </li>
        <li>
          <SmallBadge>Framer-motion</SmallBadge>
        </li>
      </ul>
    </Section>
  );
}

export default Skill;
