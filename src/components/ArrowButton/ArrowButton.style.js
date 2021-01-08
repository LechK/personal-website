import styled from "styled-components";

export const Center = styled.div`
  cursor: pointer;
  width: 2em;
  height: 2em;
  background: transparent;
  border-top: 0.4em solid white;
  border-right: 0.4em solid white;
  transition: all 200ms ease;
  transform: rotate(${(props) => props.rotation});
  &:hover {
    border-color: ${({ theme }) => theme.react};
    box-shadow: 0.3em -0.3em 0 white;
  }
  &.dark {
    border-top: 0.4em solid black;
    border-right: 0.4em solid black;
    &:hover {
      border-color: ${({ theme }) => theme.react};
      box-shadow: 0.3em -0.3em 0 black;
    }
  }
`;
