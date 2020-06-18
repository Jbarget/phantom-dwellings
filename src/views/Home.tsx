import React from "react";
import styled from "styled-components";

import { H1, spacingStyles } from "../components/Typography";
import { Story } from "../types/story.types";
import StoryTeller from "../components/StoryTeller";

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

const storyOne: Story = {
  triggerTimes: [2, 5, 9],
  audio: "story-one.mp3",
  chapters: [
    {
      mapProps: { center: [132.222, -27.9], zoom: 3 },
      markers: [],
    },
    {
      mapProps: { center: [146.1399148, -17.9477107], zoom: 3 },
      markers: [{ center: [146.3585152, -17.7195261], title: "Something" }],
    },
    {
      mapProps: { center: [146.3585152, -17.91195261], zoom: 3 },
      markers: [{ center: [140.3585152, -17.7195261], title: "Elison Reef" }],
    },
    { mapProps: { center: [125.3585152, -17.7195261], zoom: 7 }, markers: [] },
  ],
};

const Home = () => {
  return (
    <div>
      <Header pv={5}>
        <H1 fontSize={5} ta="center">
          Phantom Dwellings
        </H1>
      </Header>
      <Main pt={10}>
        <StoryTeller story={storyOne} />
      </Main>
    </div>
  );
};

export default Home;
