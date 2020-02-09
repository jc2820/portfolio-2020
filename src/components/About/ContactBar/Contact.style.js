import styled from "styled-components";

const ContactsBox = styled.div`
  width: 80vw;
  display: block;
  margin-bottom: 2rem;

  p {
    font-family: "Josefin Sans", sans-serif;
    color: #4e535f;
    margin-bottom: 1rem;
    margin-right: 25px;
    text-align: justify;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: #4e535f;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
     {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const GithubIcon = styled.img`
  width: 25px;
  height: auto;
  margin-right: 12px;
`;

const CvIcon = styled.img`
  width: 25px;
  margin-right: 12px;
`;

const EmailIcon = styled.img`
  width: 25px;
  margin-right: 12px;
`;

export { ContactsBox, ContactItem, GithubIcon, CvIcon, EmailIcon };
