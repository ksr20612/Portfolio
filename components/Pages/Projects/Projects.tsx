import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';

interface ProjectsProps {}

function Projects({}: ProjectsProps): ReactElement {
  return (
    <Section>
      <Title className="mb-[20px]" lang="en">
        Projects
      </Title>
    </Section>
  );
}

export default Projects;
