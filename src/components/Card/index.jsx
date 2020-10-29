import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, subtitle, button, slug }) => {
  return (
    <div className="card m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <Link className="card-link" to={`/works/${slug}`}>{button}</Link>
      </div>
    </div>
  )
};

export default Card;
