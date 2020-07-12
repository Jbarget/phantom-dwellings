import React from "react";
import styled from "styled-components";

import { H1, spacingStyles } from "../components/Typography";
import { Story } from "../types/story.types";
import StoryTeller from "../components/StoryTeller";
import storyOne from "../story-one";

const Header = styled.header`
  ${spacingStyles}
`;

const Main = styled.main`
  ${spacingStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <div>
      <Header pt={7} pb={5}>
        <H1 fontSize={5} ta="center">
          Phantom Dwellings
        </H1>
      </Header>
      <Main pt={5}>
        <StoryTeller story={storyOne as Story} />
      </Main>
    </div>
  );
};

export default Home;
