import React from "react";
import storiesData from "../fixtures/stories.json";
import { Story } from "../components";

export default function StoryContainer() {
  return (
    <Story.Container>
      {storiesData.map((item) => (
        <Story key={item.id} direction={item.direction}>
          <Story.BlockPane>
            <Story.Title>{item.title}</Story.Title>
            <Story.SubTitle>{item.subTitle}</Story.SubTitle>
          </Story.BlockPane>
          <Story.BlockPane>
            <Story.Image src={item.image} alt={item.alt} />
          </Story.BlockPane>
        </Story>
      ))}
    </Story.Container>
  );
}
