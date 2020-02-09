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
    color: #4e535f;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2rem;
  }

  p {
    font-family: 'Josefin Sans', sans-serif;
    color: #4e535f;
    margin-bottom: 1rem;
    text-align: justify;
    line-height: 1.5;
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
      p {
        padding: 0rem 1rem 1rem 0rem;
        margin: 0;
      }
    }
  }
`;

const Columns = styled.div`
  @media (min-width: 1024px) {
     {
      margin-top: 1rem;
      column-count: 2;
    }
  }
`;

export { AboutBox, Columns };
