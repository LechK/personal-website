import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1em;
  background-color: ${({ theme }) => theme.darkGrey};
`;
export const HeaderWrap = styled.div`
  max-width: 760px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.lightGrey};
  text-decoration: none;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.react};
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.lightGrey};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
