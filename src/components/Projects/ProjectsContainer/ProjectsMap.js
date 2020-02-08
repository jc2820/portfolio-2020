import React from "react";
import projectData from "../../../utils/projectData";
import * as SC from "./ProjectsMap.style";

const ProjectsMap = () => {
  return projectData.map(item => {
    return (
      <SC.Card key={item}>
        <img src={item.imgSrc} alt={item.imgAlt} />
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

export default ProjectsMap;
