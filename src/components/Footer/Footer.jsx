import React from "react";
import * as S from "./Footer.style";

function Footer({ email, copyright, phoneNumber }) {
  return (
    <S.Footer>
      <S.Heading>Want to reach me?</S.Heading>
      <S.Email href={`mailto:${email}`}>{email}</S.Email>
      <S.PhoneNumber>{phoneNumber}</S.PhoneNumber>
      <S.SocialBox>
        <S.StyledSocialIcon
          url="http://linkedin.com/in/lechkuznecov"
          style={{ height: 30, width: 30 }}
          bgColor="#2867b2"
        />
        <S.StyledSocialIcon
          url="http://github.com/LechKuznecov"
          style={{ height: 30, width: 30 }}
          bgColor="#eef3fc"
        />
      </S.SocialBox>
      <S.Copyright>{copyright}</S.Copyright>
    </S.Footer>
  );
}

export default Footer;
