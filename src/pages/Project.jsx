import React from 'react';
import CaseStudy from './CaseStudy';
import { Title, Card } from '../components';
import { injectIntl } from 'react-intl';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


const Project = ({ intl }) => {
  let pageTitle = intl.formatMessage({ id: 'work.slug' });
  const casestudies = ["platon", "solane", "sedal"];

  const showCaseStudies = () => casestudies.map((casestudy) => {
    let title = intl.formatMessage({ id: `${casestudy}.title` });
    let subtitle = intl.formatMessage({ id: `${casestudy}.subtitle` });
    let button = intl.formatMessage({ id: "button.text" });

    return (
      <Card title={title} subtitle={subtitle} button={button} slug={casestudy} />
    );
  });


  return (
    <Router>
      <Title>{pageTitle}</Title>
      <div className="d-flex flex-wrap justify-content-center">
        {showCaseStudies()}
      </div>
      <Switch>
        <Route path={`/works/:workSlug`}>
          <CaseStudy />
        </Route>
      </Switch>
    </Router>
  )
};

export default injectIntl(Project);
