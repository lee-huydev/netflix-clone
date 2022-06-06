import styled from 'styled-components/macro';
import Admin from '..';

export const Container = styled.div`
   width: 1000px;
   margin: 50px auto;
   border: 1px solid #444;
   padding: 20px;
   .table {
      color: #fff;
   }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
   user-select: none;
   .icon-status {
      color: #be6715;
      margin-left: 15px;
   }
   .icon-status__active {
      color: green;
      margin-left: 15px;
   }
   .icon-edit {
      margin-left: 10px;
      margin-bottom: 5px;
      font-size: 15px;
      &:hover {
         color: #e51313;
         cursor: pointer;
      }
   }
   .inner {
      width: 100%;
      position: relative;
      .input-time {
         outline: none;
         background-color: #333;
         border: none;
         padding: 2px 10px;
         color: #fff;
         font-size: 15px;
      }
      .icon-check {
         position: absolute;
         top: 3px;
         left: 165px;
         font-size: 18px;
         z-index: 9999;
         &:hover {
            color: green;
            cursor: pointer;
         }
      }
   }
`;

export const Loading = styled.div`
   margin: 100px auto;
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: center;
   align-items: center
`
