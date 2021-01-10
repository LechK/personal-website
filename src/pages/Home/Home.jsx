import React, { useState } from "react";
import {
  ArrowButton,
  SideBarMenu,
  Workplace,
  Studies,
  MyProfile,
} from "../../components";
import * as S from "./Home.style";
import { SkillBar } from "react-skills";
import Mylida from "../../assets/Mylida.png";
import Viko from "../../assets/Viko.jpg";
import CA from "../../assets/CA.png";
import Lech from "../../assets/Lech.jpg";

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
      {/* *********************************************************** ABOUT ME ********************************************************** */}
      <S.Section>
        <S.Heading>About Me</S.Heading>
        <MyProfile
          photo={Lech}
          motto="while( ! ( succeed = try() ) )"
          info="Aiming to become a senior developer in 3
                years by hard work and further learning.
                Ambitious and self-demanding.
                I always wanted to try myself in IT, but
                never got a chance. However, after my
                friend introduced me to coding, I knew
                that I wanted to become a part of it and
                create lots of awesome projects.
                Interested in Front-End Developers
                position."
        />
        <S.CompInt>
          <div>
            <S.SubHeading>Competencies</S.SubHeading>
            <S.Competencies>
              <li>Hardworking</li>
              <li>Responsibility</li>
              <li>Ambitiousness</li>
              <li>Motivation</li>
              <li>Long-term thinking</li>
              <li>Creativity</li>
              <li>Patiency</li>
            </S.Competencies>
          </div>
          <div>
            <S.SubHeadingInt>Interests</S.SubHeadingInt>
            <S.Interests>
              <li>Reading</li>
              <li>Science</li>
              <li>Innovations</li>
              <li>AI & Robotics</li>
              <li>Video Games</li>
              <li>Music</li>
              <li>Dogs</li>
              <li>... and Cats</li>
            </S.Interests>
          </div>
        </S.CompInt>
      </S.Section>
      {/* ****************************************************** MY JOURNEY SECTION ************************************************** */}
      <S.Section color="primary">
        <S.Heading>My Journey</S.Heading>
        <Workplace
          logo={Mylida}
          company="Mylida"
          position="Advertising Specialist since 2015, Team lead of 3 people - since 2018"
          city="Vilnius"
          info="After studies at University of applied sciences, bachelor degree in marketing, I have landed job in 'Mylida' as a advertising specialist."
          responsibilities={[
            {
              key: 1,
              main:
                "All advertising services, car-wrapping, outdoor and indoor lightboxes",
            },
            {
              key: 2,
              main: "Team Lead from 2018. Leading 3 people",
            },
            {
              key: 3,
              main: "Page administration (WordPress)",
            },
          ]}
        />
      </S.Section>
      {/* ********************************************************** STUDIES SECTION ************************************************* */}
      <S.Section>
        <S.Heading>My education</S.Heading>
        <Studies
          logo={CA}
          uni="Code Academy | 2020 06 - 2020 12"
          name="ADVANCED FRONT-END DEVELOPER'S COURSE (440HOURS)"
          city="Vilnius"
          info="Front-End Developer's Certificate"
        />
        <Studies
          logo={Viko}
          uni="University of Applied Sciences | 2012 - 2015"
          name="ADVERTISING MANAGEMENT"
          city="Vilnius"
          info="Bachelor Degree in Marketing"
        />
      </S.Section>
    </>
  );
}

export default Home;
