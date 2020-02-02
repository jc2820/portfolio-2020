import styled from "styled-components";

const HeaderBox = styled.section`
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
  }

  @media (min-width: 1024px) {
     {
      h1 {
        font-size: 6rem;
      }
    }
  }
`;

export { HeaderBox };
