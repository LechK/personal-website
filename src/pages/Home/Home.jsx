import React from "react";
import { ArrowButton } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <>
      <S.Hello>
        <S.Welcome>
          Hello, I'm <S.Span>Lech Kuznecov</S.Span>.
        </S.Welcome>
        <S.Welcome>
          I'm a <S.Span>front-end</S.Span> developer.
        </S.Welcome>
        <S.ArrowPlace>
          <S.Box>
            <ArrowButton rotation="-135deg" id="left" />
            <S.Label htmlFor="left">Skills</S.Label>
          </S.Box>
          <S.Box>
            <S.Label htmlFor="right">Portfolio</S.Label>
            <ArrowButton rotation="45deg" id="right" />
          </S.Box>
        </S.ArrowPlace>
        <S.BottomBox>
          <S.Label htmlFor="bottom">About</S.Label>
          <ArrowButton rotation="135deg" id="bottom" />
        </S.BottomBox>
      </S.Hello>
      <S.Main></S.Main>
    </>
  );
}

export default Home;
