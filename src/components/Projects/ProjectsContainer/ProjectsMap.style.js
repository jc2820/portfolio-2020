import styled from "styled-components";

const Card = styled.div`
  width: 80vw;
  height: auto;
  border: 2px solid #2b2b31;

  img {
    width: 78vw;
    height: auto;
  }

  h2 {
    font-family: "Nunito Sans", sans-serif;
    color: #2b2b31;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    color: #2b2b31;
  }

  @media (min-width: 1024px) {
     {
      width: 20vw;
      height: auto;

      img {
        width: 18vw;
        height: auto;
      }
    }
  }
`;

const StackItem = styled.p`
  font-family: "Nunito Sans", sans-serif;
  color: #2b2b31;
  border: 1px solid #2b2b31;
`;

export { Card, StackItem };
