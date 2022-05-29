import styled from 'styled-components/macro';

export const Container = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: 999;
   background-color: rgba(0, 0, 0, 0.7);
   overflow: scroll;
`;
export const Content = styled.div`
   width: 1200px;
   height: 900px;
   background-color: #141414;
   position: absolute;
   top: 50px;
   overflow: hidden;
   left: 50%;
   border-radius: 10px;
   background-image: #141414;
   transform: translateX(-50%);
   .icon-close {
      position: absolute;
      right: 17px;
      top: 15px;
      font-size: 35px;
      color: #fff;
      z-index: 9999;
      border: 5px solid transparent;
      border-radius: 100%;
      background-color: #181818;
      cursor: pointer;
   }
   .video {
      width: 100%;
      height: 675px;
      display: block;
      video {
         width: 100%;
         height: 100%;
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
      }
   }
`;
export const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
   );
`;
export const Frame = styled.div`
   display: flex;
   position: relative;
   justify-content: space-between;
   color: #fff;
   padding: 40px 48px;
   .description {
      display: block;
      flex-basis: 70%;
      .description__top {
         display: flex;
         gap: 10px;
         .description__match {
            color: green;
            font-weight: bold;
         }
         .description__age {
            outline: 1px solid #ccc;
            padding: 0 3px;
            margin: 0 5px;
         }
      }
      .description__title {
         font-size: 15px;
         line-height: 1.5;
         display: block;
         padding-top: 30px;
      }
   }
   .detail {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 30px;
      font-size: 14px;
      flex-basis: 30%;
      span {
         color: #777;
         font-size: 14px;
      }
   }
`;
