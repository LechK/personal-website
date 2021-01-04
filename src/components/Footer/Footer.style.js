import styled from "styled-components";
import linkedin from "../../assets/linkedin.svg";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.darkGrey};
  text-align: center;
  margin: 0 auto;
  padding: 2em;
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.lightGrey};
  margin: 0;
  padding-bottom: 0.5em;
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.react};
  /* background-image: url(${linkedin});
  background-repeat: no-repeat; */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    transition: 0.5s;
    color: ${({ theme }) => theme.lightGrey};
  }
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.react};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    transition: 0.5s;
    color: ${({ theme }) => theme.lightGrey};
  }
  padding: 0.4em 0;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.lightGrey};
  margin: 0;
`;
