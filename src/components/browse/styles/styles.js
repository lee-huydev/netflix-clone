import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const Container = styled.div`
   width: 105%;
   overflow: hidden;
   left: -5%;
   position: relative;
`;

export const Video = styled.video`
   width: 105%;
   margin-top: -100px;
   @media (min-width: 1400px) {
      margin-top: -150px;
   }
`;

export const Image = styled.img`
   width: 400px;
   height: auto;
   object-fit: cover;
   @media (max-width: 1300px) {
      width: 350px;
   }
`;

export const Picture = styled.img`
   width: 100%;
   /* height: 70%; */
   height: auto;
   object-fit: cover;
`;

export const MoreFrame = styled.div`
   position: relative;
   top: -650px;
   left: 130px;
   width: 500px;
   @media (max-width: 1300px) {
      top: -500px;
      width: 400px;
   }
   @media (min-width:1600px) {
      top: -700px;
      left: 150px;
   }

`;

export const TextAbout = styled.p`
   color: #fff;
   text-shadow: 1px 1px #000;
   line-height: 1.5;
   font-weight: 400;
   margin: -5px 0 20px;
   font-size: 20px;
   user-select: none;
   @media (max-width: 1300px) {
      font-size: 17px;
   }
`;

const Button = styled.div`
   padding: 2px 30px 2px 10px;
   border: none;
   border-radius: 5px;
   color: white;
   font-size: 16px;
   font-weight: bold;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   cursor: pointer;
   user-select: none;
   .btn-icons {
      font-size: 35px;
   }
`;
export const BtnInfor = styled(Button)`
   background-color: rgba(109, 109, 110, 0.7);
   padding: 8px 30px 8px 10px;
   .btn-icons {
      font-size: 25px;
      margin-right: 10px;
   }
`;
export const BtnPlay = styled(Button)`
   background-color: #fff;
   color: #000;
   margin-right: 10px;
`;
export const BtnGroup = styled.div`
   width: 400px;
   display: flex;
   a {
      text-decoration: none;
   }
`;
