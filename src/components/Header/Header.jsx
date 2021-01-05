import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.HeaderWrap>
        <S.LogoLink to="/">
          <S.Logo>LK</S.Logo>
        </S.LogoLink>

        <S.Actions>
          <S.StyledLink to="/">Main</S.StyledLink>
          <S.StyledLink to="/skills">Skills</S.StyledLink>
          <S.StyledLink to="/portfolio">Portfolio</S.StyledLink>
        </S.Actions>
      </S.HeaderWrap>
    </S.Header>
  );
}

export default Header;
