import { forwardRef } from 'react';
import { Video, Picture, TextAbout, Image, Container, MoreFrame, BtnGroup, BtnInfor, BtnPlay } from './styles/styles';

export default function Browse({ children, ...restProps }) {
   return <Container{...restProps}>{children}</Container>;
}

export const Media = forwardRef(( { ...restProps },ref) => <Video {...restProps} ref={ref} />);

Browse.Picture = ({...restProps}) => <Picture {...restProps} />

Browse.ImgTitle = ({...restProps}) => <Image {...restProps}/>

Browse.MoreFrame = ({children}) => <MoreFrame>{children}</MoreFrame> 

Browse.TextAbout = ({children}) => <TextAbout>{children}</TextAbout>
Browse.BtnGroup = ({children}) => <BtnGroup>{children}</BtnGroup>
Browse.BtnPlay = function BrowsePlay({ children ,...restProps}) {
   return <BtnPlay {...restProps}>{children}</BtnPlay>
} 
Browse.BtnInfor = ({children}) => <BtnInfor>{children}</BtnInfor>
