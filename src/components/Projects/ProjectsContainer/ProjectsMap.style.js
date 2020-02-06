import styled from "styled-components";

const Card = styled.div`
    margin-top: 2rem;
    border-bottom: 1px solid #2b2b31;
    padding: 1rem;

  img {
    width: 80vw;
    height: auto;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-weight: 400;
    color: #2b2b31;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    color: #2b2b31;
    text-align: justify;
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
  font-family: "Nunito Sans", sans-serif;
  color: #2b2b31;
`;

const Bold = styled.span`
  font-family: "Nunito Sans", sans-serif;
  color: #2b2b31;
  font-weight: 700;
  text-align: none;
`;

export { Card, StackItem, Bold };
