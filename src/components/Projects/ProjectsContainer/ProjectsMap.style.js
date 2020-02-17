import styled from "styled-components";

const Card = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid #4e535f;
  padding: 1rem;

  img {
    width: 80vw;
    height: auto;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-weight: 100;
    color: #4e535f;
  }

  p {
    font-family: "Josefin Sans", sans-serif;
    color: #4e535f;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #4e535f;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 23vw;
    height: auto;

    img {
      width: 23vw;
      height: auto;
    }
  }
`;

const StackItem = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: #4e535f;
`;

const LinksBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: -1rem;
  margin-bottom: -1rem;
`;

export { Card, StackItem, LinksBox };
