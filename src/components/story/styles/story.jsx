import styled from 'styled-components/macro';

export const Inner = styled.div`
   display: flex;
   align-items: center;
   flex-direction: ${({ direction }) => direction};
   justify-content: space-between;
   max-width: 1100px;
   margin: auto;
   width: 100%;

   @media (max-width: 1000px) {
      flex-direction: column;
   }
`;

export const BlockPane = styled.div`
   width: 50%;
   position: relative;
   video {
      width: 100%;
      height: 100%;
   }
   @media (max-width: 1000px) {
      width: 100%;
      padding: 0 45px;
      text-align: center;
   }
`;

export const Title = styled.h1`
   font-size: 50px;
   line-height: 1.1;
   margin-bottom: 8px;

   @media (max-width: 600px) {
      font-size: 35px;
   }
`;

export const SubTitle = styled.h2`
   font-size: 26px;
   font-weight: normal;
   line-height: normal;

   @media (max-width: 600px) {
      font-size: 18px;
   }
`;

export const Image = styled.img`
   max-width: 100%;
   height: auto;
`;

export const Item = styled.div`
   display: flex;
   border-bottom: 8px solid #222;
   padding: 50px 5%;
   color: #fff;
   overflow: hidden;
`;

export const Container = styled.div`
   @media (max-width: 1000px) {
      ${Item}:last-of-type h2 {
         margin-bottom: 50px;
      }
   }
`;
export const Video = styled.div`
   width: 100%;
   height: 100%;
   max-width: 73%;
   max-height: 54%;
   position: absolute;
   top: 48%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const Animate = styled.div`
   position: absolute;
   left: -35px;
   bottom: 8%;
   margin: 0 auto;
   background: #000;
   display: flex;
   align-items: center;
   width: 65%;
   min-width: 15em;
   padding: 0.25em 0.65em;
   border: 2px solid rgba(255, 255, 255, 0.25);
   box-shadow: 0 0 2em 0 #000;
   border-radius: 0.75em;
   img {
      width: 100%;
   }
   &::after {
      width: 3em;
      height: 3em;
      outline: 2px solid #000;
      outline-offset: -2px;
      display: block;
      background: url(/images/misc/download-icon.gif) center center no-repeat;
      background-size: 100%;
      content: '';
      flex-grow: 0;
      flex-shrink: 0;
   }
`;
export const CardAnimate = styled.div`
   margin: 0 1em 0 0;
   width: 60px;
   height: auto;
   flex-grow: 0;
   flex-shrink: 0;
`;

export const Text = styled.p`
   font-weight: bold;
   margin-top: 10px;
   padding-right: 70px;
`;
