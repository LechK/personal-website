import React from "react";
import { Button, Section } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Main>
      <Section background="gainsboro">
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development.
      </Section>
      <Section>
        <Button color="secondary" handleClick={() => alert("Hi")}>
          Check React out
        </Button>
      </Section>
    </S.Main>
  );
}

export default Home;
