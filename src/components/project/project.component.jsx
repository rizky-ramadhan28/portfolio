import React from "react";

import "./project.styles.css";

const Project = ({ project: { name, projectUrl, imageUrl, date } }) => (
  <div className="col-12 col-sm-4 mb-4 project">
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-url"
    >
      <div className="card">
        <img src={imageUrl} className="card-img-top project-image" alt={name} />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <p className="card-text">
            <small className="text-muted">{date}</small>
          </p>
        </div>
      </div>
    </a>
  </div>
);

export default Project;
