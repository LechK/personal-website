import React from "react";
import * as S from "./Studies.style";

function Studies({ logo, uni, name, city, info }) {
  return (
    <S.Sectioner>
      <S.Logo src={logo} alt="logo" />
      <S.Section>
        <S.Uni>{uni}</S.Uni>
        <S.Name>{name}</S.Name>
        <S.City>{city}</S.City>
        <S.Info>
          Degree/Certificate: <S.Strong>{info}</S.Strong>
        </S.Info>
        <S.Line />
      </S.Section>
    </S.Sectioner>
  );
}

export default Studies;
