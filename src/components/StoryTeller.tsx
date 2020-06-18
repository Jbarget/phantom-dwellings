import React, { useCallback, useState, useRef, Fragment } from "react";
import { Story } from "../types/story.types";

import Map from "./Map";

interface StoryTellerProps {
  story: Story;
}

const StoryTeller = ({ story }: StoryTellerProps) => {
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
      <Map chapter={story.chapters[currentStep]} />
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
