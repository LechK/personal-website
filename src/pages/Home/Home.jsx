import React, { useState } from "react";
import { ArrowButton, SideBarMenu } from "../../components";
import * as S from "./Home.style";
import { SkillBar } from "react-skills";

function Home() {
  const [openSkills, setOpenSkills] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

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
          <ArrowButton
            rotation="135deg"
            id="bottom"
            open={openAbout}
            setOpen={setOpenAbout}
          />
        </S.BottomBox>
      </S.Hello>
      {/* ***************************************************SKILL SIDE BAR*********************************************************** */}
      <SideBarMenu open={openSkills} setOpen={setOpenSkills} direction="left">
        <S.Heading>My acquired skills</S.Heading>
        <S.SkillBox>
          <SkillBar
            name="JavaScript"
            level={70}
            color="rgb(239, 216, 29)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="React.js"
            level={75}
            color="rgb(0, 216, 255)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Styled"
            level={85}
            color="rgb(214, 108, 142)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="HTML5"
            level={70}
            color="rgb(221, 75, 37)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="CSS"
            level={65}
            color="rgb(37, 75, 221)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Node.js"
            level={40}
            color="rgb(135, 191, 0)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Git"
            level={60}
            color="rgb(233, 76, 51)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="REST APIs"
            level={55}
            color="rgb(198, 223, 246)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="MySQL"
            level={35}
            color="rgb(0, 117, 143)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="npm CLI"
            level={45}
            color="rgb(197, 54, 53)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Frameworks"
            level={66}
            color="rgb(0, 202, 172)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Responsive"
            level={80}
            color="rgb(5, 5, 5)"
            levelProgress="true"
          />
          <S.Break />
          <SkillBar
            name="Dev tools"
            level={53}
            color="rgb(4, 118, 230)"
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
        <S.Heading>My portfolio</S.Heading>
      </SideBarMenu>
      {/* ****************************************************** ABOUT SECTION ************************************************** */}
      <S.Section>
        <S.Heading>About Me</S.Heading>
      </S.Section>
    </>
  );
}

export default Home;
