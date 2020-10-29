import React from 'react';
import { Title } from '../components';
import { injectIntl } from 'react-intl';
import { Jumbotron } from '../components';

const Home = ({ intl }) => {
  const title = intl.formatMessage({ id: "home.title" });
  const content = intl.formatMessage({ id: "home.content" });

  return (
    <>
      <Title>{title}</Title>
      <Jumbotron description={content} />
    </>
  )
};

export default injectIntl(Home);
