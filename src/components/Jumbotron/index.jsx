import React from 'react';

const Jumbotron = ({ title, description }) => {
  return (
    <div className="my-3 jumbotron jumbotron-fluid bg-primary text-light">
      <div className="container">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
    </div>
  )
};

export default Jumbotron;
