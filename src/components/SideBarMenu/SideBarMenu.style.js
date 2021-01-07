import styled from "styled-components";

export const StyledMenu = styled.div`
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.dark};
  padding: 2em 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;
