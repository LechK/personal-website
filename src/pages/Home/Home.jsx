import React, { useState } from "react";
import { ArrowButton, SideBarMenu, Workplace } from "../../components";
import * as S from "./Home.style";
import { SkillBar } from "react-skills";
import Mylida from "../../assets/Mylida.png";

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
          <S.Label htmlFor="bottom">About Me</S.Label>
          <ArrowButton rotation="135deg" id="bottom" />
        </S.BottomBox>
      </S.Hello>
      {/* ***************************************************SKILL SIDE BAR*********************************************************** */}
      <SideBarMenu open={openSkills} setOpen={setOpenSkills} direction="left">
        <ArrowButton
          rotation="-135deg"
          id="left"
          color="dark"
          open={openSkills}
          setOpen={setOpenSkills}
        />
        <S.Heading>My acquired skills</S.Heading>
        <S.SkillBox>
          <SkillBar
            name="JavaScript"
            level={70}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="React.js"
            level={75}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Styled"
            level={85}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="HTML5"
            level={70}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="CSS"
            level={65}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Node.js"
            level={40}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Git"
            level={60}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="REST APIs"
            level={55}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="MySQL"
            level={35}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="npm CLI"
            level={45}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Frameworks"
            level={66}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Responsive"
            level={80}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Dev tools"
            level={53}
            color="rgb(94, 240, 255)"
            levelProgress="true"
          />
        </S.SkillBox>
      </SideBarMenu>
      {/* ****************************************************** PORTFOLIO SIDE BAR ************************************************** */}
      <SideBarMenu
        open={openPortfolio}
        setOpen={setOpenPortfolio}
        direction="right"
      >
        <ArrowButton
          rotation="45deg"
          id="right"
          color="dark"
          open={openPortfolio}
          setOpen={setOpenPortfolio}
        />
        <S.Heading>My portfolio</S.Heading>
      </SideBarMenu>
      {/* ****************************************************** ABOUT SECTION ************************************************** */}
      <S.Section>
        <S.Heading>My Journey</S.Heading>
        <Workplace
          logo={Mylida}
          company="Mylida"
          position="Advertising Specialist since 2014, Team lead of 3 people - since 2018"
          city="Vilnius"
          info="After studies at University of applied sciences, bachelor of "
        />
      </S.Section>
    </>
  );
}

export default Home;
