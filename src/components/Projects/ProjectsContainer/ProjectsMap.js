import React from "react";
import projectData from "../../../utils/projectData";
import * as SC from "./ProjectsMap.style";
import { Bold } from "../../../utils/Master.style";

const ProjectsMap = () => {
  return projectData.map(item => {
    return (
      <SC.Card key={item.name}>
        <img src={item.imgSrc} alt={item.imgAlt} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <SC.StackItem>
          <Bold>Tech Stack: </Bold>
          {item.stack}
        </SC.StackItem>
      </SC.Card>
    );
  });
};

export default ProjectsMap;
