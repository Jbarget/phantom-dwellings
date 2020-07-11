import React from "react";
import { Chapter } from "../types/story.types";
import styled from "styled-components";

interface ChapterDetailsProps {
  chapter: Chapter;
}
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
`;
// const Images: React.FC = () => {
//   return <div>Images</div>;
// };

const ChapterDetails: React.FC<ChapterDetailsProps> = ({ chapter }) => {
  return <Flex>Images</Flex>;
};

export default ChapterDetails;
