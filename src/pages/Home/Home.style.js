import styled from "styled-components";
import Wall from "../../assets/Wall.jpg";

//******************************************HOME PAGE STYLE ***************************************************************
export const Hello = styled.div`
  background-image: url(${Wall});
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Welcome = styled.h1`
  color: white;
  font-size: 3.3em;
  margin: 0.1em;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 2.5em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.3em;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.react};
`;
export const ArrowPlace = styled.div`
  padding: 5em 0;
  width: 760px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.medium}) {
    justify-content: space-evenly;
    box-sizing: border-box;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-evenly;
    box-sizing: content-box;
    max-width: 400px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  cursor: pointer;
  color: white;
  font-size: 2.5em;
  color: ${({ theme }) => theme.react};
  &:hover {
    color: white;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2em;
  }
`;
export const Main = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

// **************************************** SIDE BAR STYLE *********************************************************************
export const Heading = styled.h2`
  color: ${({ theme }) => theme.light};
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  &::before {
    content: "⎯⎯⎯ ";
  }
  &::after {
    content: " ⎯⎯⎯";
  }
`;
