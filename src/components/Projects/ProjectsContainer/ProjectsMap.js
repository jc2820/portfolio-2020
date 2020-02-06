import React from "react";
import projectData from "../../../utils/projectData";
import * as SC from "./ProjectsMap.style";

const Projects = () => {
  return projectData.map(item => {
    return (
      <SC.Card key={item}>
        <img src={item.imgSrc} alt="Project thumbnail" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <SC.StackItem>
          <SC.Bold>Tech Stack: </SC.Bold>
          {item.stack}
        </SC.StackItem>
      </SC.Card>
    );
  });
};

export default Projects;
