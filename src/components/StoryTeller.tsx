// @ts-nocheck
import React, { useCallback, useState, Fragment } from "react";
import styled from "styled-components";

import Story from "../types/story.types";
import Map from "./Map";
const Button = styled.button``;

interface StoryTellerProps {
  story: Story;
}
const StoryTeller = (props: StoryTellerProps) => {
  const [story] = useState<Story>(props.story);
  const [currentStep, setCurrentStep] = useState(0);

  const onButtonClick = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  return (
    <Fragment>
      <Map currentStep={story[currentStep]} />
      {/* <Audio /> */}
      <Button onClick={onButtonClick}>Next step</Button>
    </Fragment>
  );
};

export default StoryTeller;
