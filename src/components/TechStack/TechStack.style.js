import styled from "styled-components";

const StackContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export { StackContainer };
