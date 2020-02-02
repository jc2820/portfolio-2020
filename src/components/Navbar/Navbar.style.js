import styled from "styled-components";

const NavbarBox = styled.nav`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 2px solid black;;

    a {
        font-family: "Nunito Sans", sans-serif;
        margin: 0;
        color: black;
        text-decoration: none;
        padding: 0.5rem;
        color: black;
    }

`;

export { NavbarBox };