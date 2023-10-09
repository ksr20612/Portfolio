import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import React, { ReactElement } from 'react';
import Link from 'components/Link/Link';

interface ContactProps {}

function Contact({}: ContactProps): ReactElement {
  return (
    <Section id="contact" colored>
      <Title className="mb-[20px]" lang="en">
        Contact
      </Title>
      <div>
        <h3 className="text-primary-500 text-[1.4rem] mb-5 font-mont" tabIndex={0}>
          Have a question or want to work together?
        </h3>
        <div className="text-[1.2rem]">
          <ul>
            <li>
              Github |{' '}
              <Link href="https://github.com/ksr20612" target="_blank" className="hover:underline">
                github.com/ksr20612
              </Link>
            </li>
            <li>
              Email |{' '}
              <Link href="mailto:ksr20612@gmail.com" className="hover:underline">
                ksr20612@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
