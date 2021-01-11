import React from "react";
import * as S from "./Project.style";

function Project({ screenshots, name, link, linkName, features }) {
  return (
    <>
      <S.ProjectName>{name}</S.ProjectName>
      <S.Sectioner>
        <S.PhotoBox>
          {screenshots &&
            screenshots.map((screenshot) => {
              return (
                <S.Logo
                  key={screenshot.key}
                  src={screenshot.pic}
                  alt={screenshot.alt}
                />
              );
            })}
        </S.PhotoBox>
        <S.CompanySection>
          <S.SiteLink href={link}>⟶ {linkName} ⟵</S.SiteLink>
          <S.Heading>Key Features</S.Heading>
          <S.Features>
            {features &&
              features.map((keyFeature) => {
                return <li key={keyFeature.key}>{keyFeature.main}</li>;
              })}
          </S.Features>
        </S.CompanySection>
      </S.Sectioner>
    </>
  );
}

export default Project;
