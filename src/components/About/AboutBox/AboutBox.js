import React from "react";
import * as SC from "./AboutBox.style";
import { Bold } from "../../../utils/Master.style";

const AboutBox = () => {
  return (
    <SC.AboutBox>
      <h2>About Me</h2>
      <SC.Columns>
        <p>
          I am an aspiring web developer and recent graduate of{" "}
          <Bold>
            <a href="https://www.foundersandcoders.com/">Founders and Coders</a>
          </Bold>{" "}
          (FAC 18). I’m currently looking for dev roles where I can hone
          the skills I have learned over the past few months, build on them and
          add new technologies or specialisms to my stack.
        </p>
        <p>
          As a developer I want to build{" "}
          <Bold>apps that enhance our lives</Bold> rather than replace them, and
          contribute to a{" "}
          <Bold>fair and socially conscious online society</Bold>. Working
          towards our Tech for Better project at FAC has not only been an
          education in <Bold>agile and Scrum methodologies</Bold> and working
          with a real product owner, but has also demonstrated how useful even a
          small app or MVP can be when applied to a good cause.
        </p>
        <p>
          My background before FAC was in visual art - working on my own
          practice and in various gallery and arts technical roles over the last
          decade or so. The{" "}
          <Bold>creative potential of software and web development</Bold> is why
          I first became interested in moving to a career in tech, and I would
          love to further explore that relationship in future, particularly in a
          visual art context.
        </p>
        <p>
          I’m currently really enjoying working with <Bold>React</Bold> and{" "}
          <Bold>Styled Components</Bold>. They’re a great way to easily make
          really beautiful front-end apps. Making our student project – a
          recycling game app into a <Bold>PWA</Bold> was exciting and showed how
          useful native-like web-apps can be. I’m looking at exploring the{" "}
          <Bold>Svelte</Bold> framework next and improving my knowledge of{" "}
          <Bold>computer and web security</Bold> through some online courses.
        </p>
      </SC.Columns>
    </SC.AboutBox>
  );
};

export default AboutBox;
