import { Container, Title, List, Name, Picture, Item } from './styles/styles';

export default function Profiles({ children }) {
   return <Container>{children}</Container>;
}

Profiles.Title = ({ children }) => <Title>{children}</Title>;
Profiles.List = ({ children }) => <List>{children}</List>;
Profiles.Name = ({ children }) => <Name>{children}</Name>;
Profiles.Picture = ({ src, ...restProps }) => (
   <Picture
   {...restProps}
   src={`/images/users/${src}.png`}
   />
);
Profiles.Item = ({ children }) => <Item>{children}</Item>;
