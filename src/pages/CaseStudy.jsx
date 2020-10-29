import React from 'react';
import { useParams } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import { Jumbotron } from '../components';

const CaseStudy = ({ intl }) => {
  let { workSlug } = useParams();

  const title = intl.formatMessage({ id: `${workSlug}.title` });
  const description = intl.formatMessage({ id: `${workSlug}.description` });

  return (
    <Jumbotron title={title} description={description}/>
  )
};

export default injectIntl(CaseStudy);
