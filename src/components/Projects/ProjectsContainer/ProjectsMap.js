import React from "react";
import projectData from "../../../utils/projectData";
import * as SC from "./ProjectsMap.style";
import { Bold } from "../../../utils/Master.style";

const ProjectsMap = () => {
  return projectData.map(item => {
    return (
      <SC.Card key={item.name}>
        <a href={item.url}>
          <img src={item.imgSrc} alt={item.imgAlt} title={item.imgAlt} />
        </a>
        <a href={item.url}>
          <h2>{item.name}</h2>
        </a>
        <p>{item.description}</p>
        <SC.LinksBox>
          <a href={item.url}>
            <p>
              <Bold>Live site</Bold>
            </p>
          </a>
          <a href={item.gitUrl}>
            <p>
              <Bold>Code</Bold>
            </p>
          </a>
        </SC.LinksBox>
        <SC.StackItem>
          <Bold>Tech Stack: </Bold>
          {item.stack}
        </SC.StackItem>
      </SC.Card>
    );
  });
};

export default ProjectsMap;
