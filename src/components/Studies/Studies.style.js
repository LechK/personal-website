import styled from "styled-components";

export const Sectioner = styled.div`
  max-width: 920px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 1em;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  margin: 1em 4em;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  border: 3px solid #eee;
`;

export const Section = styled.div`
  padding: 1em;
  margin: 0 1em;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 1em 0em;
    width: 300px;
  }
`;

export const Uni = styled.h3`
  color: ${({ theme }) => theme.blue};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: smaller;
  }
`;

export const Name = styled.h4`
  color: ${({ theme }) => theme.green};
  margin: 0.5em 0;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: x-small;
  }
`;

export const City = styled.h4`
  color: #555;
  margin: 0.5em 0;
`;

export const Info = styled.p`
  color: black;
  font-weight: lighter;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.green};
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;
