import React from "react";
import * as S from "./Workplace.style";

function Workplace({ logo, company, position, city, info, responsibilities }) {
  return (
    <S.Sectioner>
      <S.Logo src={logo} alt="logo" />
      <S.CompanySection>
        <S.Company>{company}</S.Company>
        <S.Position>{position}</S.Position>
        <S.City>{city}</S.City>
        <S.Info>{info}</S.Info>
        <S.Responsibilities>
          {responsibilities &&
            responsibilities.map((resposibility) => {
              return <li key={resposibility.key}>{resposibility.main}</li>;
            })}
        </S.Responsibilities>
      </S.CompanySection>
    </S.Sectioner>
  );
}

export default Workplace;
