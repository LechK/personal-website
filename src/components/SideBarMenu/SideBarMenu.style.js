import styled from "styled-components";

export const StyledMenu = styled.div`
  @media (max-width: ${({ theme }) => theme.medium}) {
    padding: 0;
  }
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.sidebar};
  padding: 2em 1em;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  bottom: 0;
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

export const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
