import styled from "styled-components";

const ErrorBox = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-family: "Playfair Display", serif;
    font-weight: 400;
    margin: 0;
    color: #4E535F;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
    color: #4E535F;
  }

  @media (min-width: 1024px) {
     {
      h1 {
        font-size: 4rem;
      }
    }
  }
`;

export { ErrorBox };