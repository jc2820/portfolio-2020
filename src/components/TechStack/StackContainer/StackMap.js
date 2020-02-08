import React from "react";
import { techStack } from "../../../utils/stackData";
import * as SC from "./StackMap.style";

const StackMap = () => {
  return techStack.map(tech => {
    return <SC.StackImage src={tech.img} alt={tech.imgAlt} />;
  });
};

export default StackMap;
