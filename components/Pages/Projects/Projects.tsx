import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';
import Link from 'components/Link/Link';
import ProjectCard from './ProjectCard/ProjectCard';

interface ProjectsProps {}

function Projects({}: ProjectsProps): ReactElement {
  return (
    <Section>
      <Title className="mb-[20px]" lang="en">
        Projects
      </Title>
      <div>
        <ProjectCard />
        <span className="mt-5 text-[1.0rem]">
          👉 프로젝트별로 구성된 더 자세한 기록은{' '}
          <Link
            href="https://tabby-henley-bfa.notion.site/41e40d5784b44da28ef0fce99d0a3f4e?pvs=4"
            className="hover:underline"
            target="_blank">
            Notion
          </Link>{' '}
          에서도 확인할 수 있습니다.
        </span>
      </div>
    </Section>
  );
}

export default Projects;
