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

const Bold = styled.span`
  font-family: "Josefin Sans", sans-serif;
  color: #4e535f;
  font-weight: 700;
  text-align: none;
  line-height: 1.5;
`;

export { Card, StackItem, Bold };
