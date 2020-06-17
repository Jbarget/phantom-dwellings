import React from "react";
import styled from "styled-components";
import mapbox from "mapbox-gl";

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
`;

mapbox.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;

const storyOne: Story = [
  { center: [132.222, -27.9], zoom: 3 },
  { center: [146.1399148, -17.9477107], zoom: 10 },
  { center: [146.3585152, -17.7195261], zoom: 12 },
];

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
