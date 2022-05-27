import styled, { keyframes } from 'styled-components/macro';

export const Spinner = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: 999;
   background-color: black;
   ::before {
      content: '';
      background-image: url(/images/misc/spinner.png);
      background-repeat: no-repeat;
      width: 150px;
      height: 150px;
      position: absolute;
      top: 50%;
      right: 50%;
      margin-top: -75px;
      margin-right: -75px;
      animation: spin 1s linear infinite
   }
   @keyframes spin {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
`;
export const Picture = styled.img`
   width: 100%;
   max-width: 70px;
   object-fit: cover;
   position: absolute;
   top: 50%;
   right: 50%;
   border-radius: 5px;
   transform: translate(50%, -50%)
`
export const Img = styled.img`
   width: 100%;
   height: auto;
   margin: auto;
   max-width: 700px;
`;
