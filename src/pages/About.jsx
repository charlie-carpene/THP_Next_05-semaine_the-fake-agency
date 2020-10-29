import React from 'react';
import { Title } from '../components';
import { injectIntl } from 'react-intl';
import { Jumbotron } from '../components';

const About = ({ intl }) => {
  const title = intl.formatMessage({ id: "about.title" });
  const content = intl.formatMessage({ id: "about.content" });

  return (
    <>
      <Title>{title}</Title>
      <Jumbotron description={content} />
    </>
  )
};

export default injectIntl(About);
