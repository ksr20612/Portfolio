import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';

interface BlogsProps {}

function Blogs({}: BlogsProps): ReactElement {
  return (
    <Section>
      <Title className="mb-[20px]" lang="en">
        Blogs
      </Title>
    </Section>
  );
}

export default Blogs;
