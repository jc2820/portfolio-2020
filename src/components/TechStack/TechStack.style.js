import styled from "styled-components";

const StackContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
     {
      justify-content: space-between;
    }
  }
`;

export { StackContainer };