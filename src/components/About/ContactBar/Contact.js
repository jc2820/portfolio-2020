import React from "react";
import * as SC from "./Contact.style";
import { Bold } from "../../../utils/Master.style";
import githubLogo from "../../../assets/misc/github-original.svg";
import pdfLogo from "../../../assets/misc/page-export-pdf.svg";
import emailLogo from "../../../assets/misc/email-plus.svg";

const Contact = () => {
  return (
    <SC.ContactsBox>
      <SC.ContactItem>
        <SC.GithubIcon src={githubLogo} alt="Github icon" />
        <a href="https://github.com/jc2820">
          <p>
            <Bold>See my Github</Bold>
          </p>
        </a>
      </SC.ContactItem>
      <SC.ContactItem>
        <SC.CvIcon src={pdfLogo} alt="page or download icon" />
        <a href="https://github.com/jc2820/cv">
          <p>
            <Bold>See my CV</Bold>
          </p>
        </a>
      </SC.ContactItem>
      <SC.ContactItem>
        <SC.EmailIcon src={emailLogo} alt="new email icon" />
        <a href="mailto:jc2820@hotmail.com">
          <p>
            <Bold>jc2820@hotmail.com</Bold>
          </p>
        </a>
      </SC.ContactItem>
    </SC.ContactsBox>
  );
};

export default Contact;
