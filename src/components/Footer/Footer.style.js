import styled from "styled-components";

import { SocialIcon } from "react-social-icons";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  text-align: center;
  margin: 0 auto;
  padding: 2em;
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.light};
  margin: 0;
  padding-bottom: 0.5em;
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.react};
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.light};
  }
`;

export const PhoneNumber = styled.h4`
  color: ${({ theme }) => theme.react};
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.light};
  }
`;

export const SocialBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`;

export const StyledSocialIcon = styled(SocialIcon)`
  margin: 0.5em;
  border-radius: 50%;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.react};
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.light};
  margin: 0;
`;
