import React from 'react';
import { injectIntl } from 'react-intl';

import { Link } from "react-router-dom";

import enFlag from "../../assets/img/en_flag.png";
import frFlag from "../../assets/img/fr_flag.png";

const Navbar = ({ intl, handleLanguage }) => {
  let img = '';
  if (intl.locale === 'fr') {
    img = frFlag;
  } else {
    img = enFlag;
  }

  let aboutSlug = intl.formatMessage({ id: "about.slug" });
  let homeSlug = intl.formatMessage({ id: "home.slug" });
  let workSlug = intl.formatMessage({ id: "work.slug" });

  return (
    <nav className="my-2 navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">{homeSlug}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="w-100 navbar-nav d-flex justify-content-between align-items-center">
          <div>
            <Link className="mx-1" to="/about">{aboutSlug}</Link>
            <Link className="mx-1" to="/works">{workSlug}</Link>
          </div>
          <img className="btn" src={img} alt="english flag" height="30" onClick={handleLanguage}/>
        </div>
      </div>
    </nav>
  )
};

export default injectIntl(Navbar);
