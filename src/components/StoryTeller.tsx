import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";

import Map from "./Map";
import ChapterDetails from "./ChapterDetails";
import { Story } from "../types/story.types";

interface StoryTellerProps {
  story: Story;
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StoryTeller: React.FC<StoryTellerProps> = ({ story }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const audioRef = useRef(null);

  const onTimeUpdate = useCallback(() => {
    // TODO: remove this ts-ignore
    // @ts-ignore
    if (audioRef.current.currentTime >= story.triggerTimes[currentStep]) {
      setCurrentStep(currentStep + 1);
    }
  }, [story.triggerTimes, currentStep, setCurrentStep]);

  return (
    <Fragment>
      <Flex>
        <Map chapter={story.chapters[currentStep]} />
        <ChapterDetails chapter={story.chapters[currentStep]} />
      </Flex>
      <audio ref={audioRef} controls onTimeUpdate={onTimeUpdate}>
        <source
          src={`${process.env.PUBLIC_URL}/story-one.mp3`}
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </Fragment>
  );
};

export default StoryTeller;
