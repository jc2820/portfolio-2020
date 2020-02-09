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
    text-align: justify;
    line-height: 1.5;
    margin: 0rem 1rem 1rem 0rem;
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
      width: 22vw;
      height: auto;

      img {
        width: 22vw;
        height: auto;
      }
    }
  }
`;

const StackItem = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: #4e535f;
`;

const LinksBox = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export { Card, StackItem, LinksBox };
