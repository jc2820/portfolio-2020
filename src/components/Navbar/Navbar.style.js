import styled from "styled-components";

const NavbarBox = styled.nav`
  background-color: white;
  width: 100vw;
  height: auto;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid #4e535f;

  a {
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
    color: black;
    text-decoration: none;
    padding: 0.5rem;
    color: #4e535f;
    line-height: 2;
  }
`;

export { NavbarBox };
