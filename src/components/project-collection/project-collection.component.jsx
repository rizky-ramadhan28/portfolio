import React from "react";

import Project from "../project/project.component";

import PROJECT_DATA from "./PROJECT_DATA";

const ProjectCollections = () => (
  <div className="card">
    <div className="card-header bg-dark text-white">Projects</div>

    <div className="card-body">
      <div className="row">
        {PROJECT_DATA.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCollections;
