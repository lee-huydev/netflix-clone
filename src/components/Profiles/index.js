import { Container, Title, List, Name, Picture, Item, IconAdd, SubTitle, Frame, Inner, Input, Button, Error, Edit } from './styles/styles';

export default function Profiles({ children }) {
   return <Container>{children}</Container>;
}



Profiles.Frame = ({ children, ...restProps }) => <Frame {...restProps}>{children}</Frame>;
Profiles.Inner = ({ children, ...restProps }) => <Inner {...restProps}>{children}</Inner>;
Profiles.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
Profiles.Button = ({ children, ...restProps }) => <Button {...restProps}>{children}</Button>;
Profiles.Input = ({ ...restProps }) => <Input {...restProps} />
Profiles.SubTitle = ({ children, ...restProps }) => <SubTitle {...restProps}>{children}</SubTitle>;
Profiles.Error = ({ children, ...restProps }) => <Error {...restProps}>{children}</Error>;
Profiles.Edit = ({ children, ...restProps }) => <Edit {...restProps}>{children}</Edit>;

Profiles.List = ({ children }) => <List>{children}</List>;
Profiles.Name = ({ children }) => <Name>{children}</Name>;
Profiles.Picture = ({ src, ...restProps }) => (
   <Picture
   {...restProps}
   src={src ?`/images/users/${src}.png` : '/images/misc/Netflix_LoadTime.gif'}
   />
);
Profiles.Item = ({ children, ...restProps }) => <Item {...restProps}>{children}</Item>;
Profiles.IconAdd = ({ children, ...restProps }) => <IconAdd {...restProps}>{children}</IconAdd>;
