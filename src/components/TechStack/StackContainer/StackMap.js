import React from "react";
import { techStack } from "../../../utils/stackData";
import * as SC from "./StackMap.style";

const StackMap = () => {
  return techStack.map(tech => {
    return (
      <a href={tech.webSrc}>
        <SC.StackImage key={tech.imgAlt} src={tech.img} alt={tech.imgAlt} />
      </a>
    );
  });
};

export default StackMap;
