import styled from "styled-components";

export const StyledMenu = styled.div`
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.sidebar};
  padding: 2em 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  &.left {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
  &.right {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
  &.bottom {
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  }
`;
