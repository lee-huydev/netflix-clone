import styled from 'styled-components/macro';

export const Title = styled.h3`
   padding-left: 55px;
   color: #fff;
   font-size: 26px;
   margin: 26px 0 20px;
   width: fit-content;
   @media (max-width: 1200px) {
      font-size: 20px;
   }
`;

export const Button = styled.button`
   width: 50px;
   height: 160px;
   font-size: 18px;
   border-radius: 5px;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.3);
   outline: none;
   border: none;
   color: white;
   z-index: 5;
   top: 50px;
   visibility: hidden;
   cursor: pointer;
   .icon-arrow {
      font-size: 30px;
   }
`;

export const Slider = styled.div`
   width: 100%;
   overflow-y: visible;
   overflow-x: scroll;
   white-space: nowrap;
   position: relative;
   scrollbar-width: none; // moz
   &::-webkit-scrollbar {
      width: 0;
      display: none;
   }
`;
export const Container = styled.div`
   position: relative;
   height: 0px;
   top: -580px;
   & + & {
      margin-top: 250px;
   }
   &:hover ${Button} {
      visibility: visible;
   }
   &:hover ${Slider} {
      padding: 100px 0px 180px;
      top: -100px;
   }
   @media (min-width: 1600px) {
      top: -620px;
   }
   @media (max-width: 1300px) {
      top: -500px;
   }
`;
export const Item = styled.div`
   width: 32vh;
   height: 160px;
   display: inline-block;
   position: relative;
   color: white;
   padding: 0 2px;
   font-size: 0.8rem;
   margin-right: 3px;
   cursor: pointer;
   transition: transform 0.8s ease-in-out;
   &:nth-of-type(1) {
      margin-left: 50px;
   }
   &:hover {
      transform: scale(1.3);
      z-index: 2;
   }
   img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 10px;
   }
   .description {
      position: absolute;
      display: none;
      z-index: 9999;
      background-color: #272727;
      width: 31.5vh;
      margin-top: -10px;
      padding: 10px 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
   }
   &:hover > .description {
      display: block;
   }
   &:hover > img {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
   }
   .description-button-frame {
      display: flex;
      flex-direction: row;
      padding: 10px;
   }
   .description-text-frame {
      padding: 10px 10px 0;
   }
   .description__match {
      color: green;
      font-weight: bold;
   }
   .description__age {
      outline: 1px solid #ccc;
      padding: 0 3px;
      margin: 0 5px;
   }
   .description__genre {
      font-size: 12px;
      display: block;
      padding-top: 10px;
   }
`;

export const DescriptionBtn = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   color: #ccc;
   border: 2px solid #333;
   text-align: center;
   font-size: 16px;
   margin-right: 5px;
   border-radius: 100%;
   &:nth-child(3),
   &:nth-child(4) {
      color: ${(props) => (props.isActive ? '#fff' : '#ccc')};
      border-color: ${(props) => (props.isActive ? '#fff' : '#333')};
      border-width: ${(props) => (props.isActive ? '3px' : '2px')};
   }
   &:hover {
      border-color: #fff;
      color: #fff;
      cursor: pointer;
   }
   &:nth-of-type(5) {
      margin-left: auto;
      margin-right: 0;
   }
`;
