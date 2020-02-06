import styled from "styled-components";

const HeaderBox = styled.header`
  justify-self: flex-start;
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;

  h1 {
    font-family: "Playfair Display", serif;
    color: #4e535f;
    font-size: 2.5rem;
    font-weight: 400;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.2rem;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    color: #4e535f;
    margin: 0;
  }

  @media (min-width: 1024px) {
     {
      h1 {
        font-size: 5rem;
      }
    }
  }
`;

export { HeaderBox };
