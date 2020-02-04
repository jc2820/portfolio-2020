import styled from "styled-components";

const AboutBox = styled.section`
display: flex;
flex-direction: column;

  width: 80vw;
  height: auto;
  padding: 1rem;
  margin: 1rem;

  h2 {
    font-family: "Playfair Display", serif;
    color: #2b2b31;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2rem;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    color: #2b2b31;
    margin-bottom: 0.5rem;
    text-align: justify;
  }
`;

export { AboutBox };
