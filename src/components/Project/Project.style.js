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

export const PhotoBox = styled.div`
  display: flex;
  margin: 0;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.medium}) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  margin: 0.5em;
  max-width: 200px;
  max-height: 150px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #eee;
`;

export const CompanySection = styled.div`
  padding: 1em;
  margin: 0 1em;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 1em 0em;
    max-width: 300px;
  }
`;

export const ProjectName = styled.h3`
  color: ${({ theme }) => theme.blue};
  text-align: center;
`;

export const SiteLink = styled.a`
  color: ${({ theme }) => theme.green};
  margin: 0.5em 0;
  text-decoration: none;
  &:hover {
    text-decoration: double underline;
  }
`;

export const Heading = styled.h4`
  color: black;
  font-weight: bolder;
`;

export const Features = styled.ul`
  font-weight: lighter;
  padding-left: 1.5em;
`;
