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
    max-width: 350px;
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
  color: white;
  font-size: 2.5em;
  color: ${({ theme }) => theme.react};
  &.sidebar {
    color: black;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5em;
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
  color: black;
  font-size: xx-large;
  text-align: center;
  &::before {
    content: "⎯⎯⎯ ";
  }
  &::after {
    content: " ⎯⎯⎯";
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1em;
  }
`;
export const SkillBox = styled.div`
  padding: 2em;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 0 1em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5em;
  }
`;
export const Break = styled.div`
  height: 0.5em;
`;
// **************************************** ABOUT SECTION ************************************************************************
export const Section = styled.section`
  background-color: ${({ theme }) => theme.light};
  padding: 1em 2em;
`;
