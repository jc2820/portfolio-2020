import styled from "styled-components";

const HeaderBox = styled.header`
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
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2rem;
    color: black;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
    color: black;
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
