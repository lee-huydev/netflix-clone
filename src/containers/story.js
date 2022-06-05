import React from 'react';
import storiesData from '../fixtures/stories.json';
import { Story } from '../components';

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
                  {item.video && (
                     <Story.Video>
                        <video src={item.video} autoPlay muted loop />
                     </Story.Video>
                  )}
                  {item.animate && (
                     <Story.Animate>
                        <Story.CardAnimate>
                           <img src={item.animate} alt="image down" />
                        </Story.CardAnimate>
                           <Story.Text>Downloading...</Story.Text>
                     </Story.Animate>
                  )}
               </Story.BlockPane>
            </Story>
         ))}
      </Story.Container>
   );
}
