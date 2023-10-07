import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';

interface ExperienceProps {}

function Experience({}: ExperienceProps): ReactElement {
  return (
    <Section colored>
      <Title className="mb-[20px]" lang="en">
        Work Experience
      </Title>
    </Section>
  );
}

export default Experience;
