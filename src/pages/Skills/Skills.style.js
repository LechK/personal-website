import styled from "styled-components";

export const Main = styled.div`
  min-height: calc(100vh - 274px);
  max-width: 760px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  color: black;
  text-align: center;
`;

export const SkillBox = styled.div`
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 0 1em;
  }
`;
