import React from "react";
import {
  Inner,
  BlockPane,
  Title,
  SubTitle,
  Image,
  Item,
  Container,
} from "./styles/story";

export default function Story({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Story.Container = function StoryContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Story.BlockPane = function StoryBlockPane({ children, ...restProps }) {
  return <BlockPane {...restProps}>{children}</BlockPane>;
};

Story.Title = function StoryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Story.SubTitle = function StorySubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Story.Image = function StoryImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
