import React, { useState } from "react";
import { ArrowButton, SideBarMenu } from "../../components";
import * as S from "./Home.style";

function Home() {
  const [openSkills, setOpenSkills] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);

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
            <ArrowButton
              rotation="-135deg"
              id="left"
              open={openSkills}
              setOpen={setOpenSkills}
            />
            <S.Label htmlFor="left">Skills</S.Label>
          </S.Box>
          <S.Box>
            <S.Label htmlFor="right">Portfolio</S.Label>
            <ArrowButton
              rotation="45deg"
              id="right"
              open={openPortfolio}
              setOpen={setOpenPortfolio}
            />
          </S.Box>
        </S.ArrowPlace>
        <S.BottomBox>
          <S.Label htmlFor="bottom">About</S.Label>
          <ArrowButton rotation="135deg" id="bottom" />
        </S.BottomBox>
      </S.Hello>
      {/* ***************************************************SKILL SIDE BAR*********************************************************** */}
      <SideBarMenu open={openSkills} setOpen={setOpenSkills}>
        <S.Heading>My acquired skills</S.Heading>
        <S.Box>
          <ArrowButton
            rotation="-135deg"
            id="right"
            open={openSkills}
            setOpen={setOpenSkills}
          />
          <S.Label htmlFor="right">Back</S.Label>
        </S.Box>
      </SideBarMenu>
      {/* ****************************************************** PORTFOLIO SIDE BAR ************************************************** */}
      <SideBarMenu open={openPortfolio} setOpen={setOpenPortfolio}>
        <S.Heading>My portfolio</S.Heading>
        <S.Box>
          <ArrowButton
            rotation="-135deg"
            id="right"
            open={openPortfolio}
            setOpen={setOpenPortfolio}
          />
          <S.Label htmlFor="right">Back</S.Label>
        </S.Box>
      </SideBarMenu>
    </>
  );
}

export default Home;
