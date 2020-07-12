import React from "react";
import { AnimateOnChange } from "react-animation";

import {
  ChapterDetails as IChapterDetails,
  Image as IImage,
} from "../types/story.types";
import styled from "styled-components";
import { P } from "./Typography";

interface ChapterDetailsProps {
  details?: IChapterDetails;
}
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  max-height: 500px;
  height: 500px;
`;

const ImagesContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Img = styled.img``;

const Image = ({ src, alt, width }: IImage) => {
  const defaultWidth = "200px";
  return (
    <Img src={`./images/${src}`} alt={alt} width={width || defaultWidth} />
  );
};

const ChapterDetails: React.FC<ChapterDetailsProps> = ({ details }) => {
  if (!details) return null;

  return (
    <Flex>
      <AnimateOnChange>
        <ImagesContainer>
          {details.images.map((image) => (
            <Image key={image.src} {...image} />
          ))}
        </ImagesContainer>
      </AnimateOnChange>
      <AnimateOnChange>
        <P
          fontSize={2}
          lineHeight={2}
          dangerouslySetInnerHTML={{ __html: details.text }}
        ></P>
      </AnimateOnChange>
    </Flex>
  );
};

export default ChapterDetails;
