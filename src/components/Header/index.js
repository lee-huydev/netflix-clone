import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import {
   Background,
   ButtonLink,
   Logo,
   Container,
   GroupFeature,
   Dropdown,
   Picture,
   Profile,
   Search,
   InputSearch,
   ProfilesName,
   Avatar,
   Li,
   SignOut,
   Line,
   BtnSearch,
} from './styles/styles';

export default function Header({ bg = true, children }) {
   return bg ? <Background>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
   return (
      <ReachRouterLink to={to}>
         <Logo {...restProps} />
      </ReachRouterLink>
   );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
   return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.GroupFeature = ({ children }) => <GroupFeature>{children}</GroupFeature>;

Header.Profile = ({ children }) => <Profile>{children}</Profile>;
Header.Li = ({ children, restProps }) => <Li {...restProps}>{children}</Li>;
Header.ProfilesName = ({ children, ...restProps }) => <ProfilesName {...restProps}>{children}</ProfilesName>;
Header.Dropdown = ({ children }) => <Dropdown>{children}</Dropdown>;
Header.Avatar = ({ children }) => <Avatar>{children}</Avatar>;
Header.SignOut = ({ children, ...restProps }) => (
   <SignOut {...restProps}>{children}</SignOut>
);
Header.Picture = ({ ...restProps }) => <Picture {...restProps} />;
Header.Line = () => <Line />;

Header.Search = function HeaderSearch({
   searchTerm,
   setSearchTerm,
   ...restProps
}) {
   const [searchActive, setSearchActive] = useState(false);
   return (
      <Search {...restProps}>
         <BtnSearch>
            <ImSearch className="icon-search" onClick={()=> console.log(123123)}/>
         </BtnSearch>
         <InputSearch
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            placeholder="Search title film..."
         />
      </Search>
   );
};

Header.InputSearch = ({ ...restProps }) => <InputSearch {...restProps} />;
