import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
export const Background = styled.div`
   display: flex;
   flex-direction: column;
   background: linear-gradient(
         to bottom,
         rgba(0, 0, 0, 0.5),
         rgba(0, 0, 0, 0.2),
         rgba(0, 0, 0, 0.5)
      ),
      url('/images/misc/home-bg.jpeg') top left / cover no-repeat;
`;

export const Container = styled.div`
   display: flex;
   margin: 0 56px;
   height: ${(props) => (props ? props.heightHeader : '100px')};
   justify-content: space-between;
   align-items: center;
   a {
      display: flex;
   }
   @media (max-width: 1000px) {
      margin: 0 30px;
   }
`;

export const ButtonLink = styled(RouterLink)`
   display: block;
   background-color: #e50914;
   width: 84px;
   height: fit-content;
   color: white;
   border: 0;
   font-size: 15px;
   border-radius: 3px;
   padding: 8px 17px;
   cursor: pointer;
   text-decoration: none;
   &:hover {
      background: #f40612;
   }
`;

export const Logo = styled.img`
   height: auto;
   /* width: 180px; */
   width: ${(props) => (props.sizeLogo ? props.sizeLogo : '100px')};
   margin-right: 40px;
   /* @media (max-width: 1024px) {
      height: 45px;
      width: 167px;
   } */
`;
export const Feature = styled(Container)`
   padding: 150px 0 500px 0;
   flex-direction: column;
   align-items: normal;
   width: 50%;
   @media (max-width: 1100px) {
      display: none;
   }
`;

export const GroupFeature = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;
export const Picture = styled.img`
   width: 100%;
   max-width: 30px;
   height: 30px;
   border-radius: 5px;
`;
export const Dropdown = styled.div`
   position: absolute;
   z-index: 999;
   right: 0px;
   padding: 0px;
   width: 150px;
   top: 86px;
   background-color: rgba(8, 11, 7, 0.5);
   border: 1px solid #333;
   border-radius: 5px;
   display: none;
   .icon-drop {
      font-size: 25px;
      color: white;
      transform: rotate(180deg);
      position: absolute;
      top: -16px;
      right: 25px;
   }
`;
export const Li = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding: 5px 10px;
   a {
      text-decoration: none;
   }
`;
export const Avatar = styled.div`
   width: fit-content;
   display: flex;
   align-items: center;
   cursor: pointer;
   user-select: none;
   .icon-drop {
      font-size: 20px;
      color: #fff;
      margin-left: 5px;
      transition: all 0.2s linear;
   }
`;
export const Line = styled.div`
   width: 100%;
   background-color: #444;
   height: 0.1px;
`;
export const Profile = styled.div`
   margin-left: 30px;
   position: relative;
   height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   &:hover {
      .icon-drop {
         transform: rotate(180deg);
      }
      ${Dropdown} {
         display: block;
      }
   }
`;

export const ProfilesName = styled.p`
   margin-left: 10px;
   color: #fff;
   font-size: 13px;
   font-weight: 400;
`;
export const SignOut = styled.button`
   background-color: transparent;
   border: none;
   color: #fff;
   font-size: 12px;
   font-weight: 400;
   padding: 8px 12px;
   &:hover {
      text-decoration: underline;
      cursor: pointer;
   }
`;

export const InputSearch = styled.input`
   width: 0px;
   transition: all 0.5s ease-in-out;
   padding: 8px 15px 8px 40px;
   border: none;
   background-color: transparent;
   outline: none;
   font-weight: 400;
   color: #fff;
   font-size: 15px;
   &:focus {
      width: 350px;
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
      border: 1px solid #fff;
   }
`;

export const Search = styled.div`
   display: flex;
   width: fit-content;
   align-items: center;
   position: relative;
   right: -20px;
   .icon-search {
      font-size: 20px;
      color: #fff;
   }
`;
export const BtnSearch = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   position: absolute;
   left: 5px;
   &:focus ~ ${InputSearch} {
      width: 350px;
      transition: all 0.5s cubic-bezier(0, 0.11, 0.35, 2);
      border: 1px solid #fff;
   }
`;
