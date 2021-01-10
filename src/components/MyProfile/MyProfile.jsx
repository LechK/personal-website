import React from "react";
import * as S from "./MyProfile.style";

function MyProfile({ photo, motto, info }) {
  return (
    <S.Main>
      <S.Photo src={photo} alt="profile photo" />
      <S.Text>
        <S.Motto>{motto}</S.Motto>
        <S.Info>{info}</S.Info>
      </S.Text>
    </S.Main>
  );
}

export default MyProfile;
