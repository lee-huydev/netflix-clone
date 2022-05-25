import styled from 'styled-components/macro';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: auto;
   width: 100%;
   height: 100vh;
   background-color: #000000
`;
export const Title = styled.h2`
   width: 100%;
   color: #fff;
   font-size: 48px;
   text-align: center;
   font-weight: 500;
`;
export const List = styled.ul`
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: row;
`;
export const Picture = styled.img`
   width: 100%;
   max-width: 150px;
   height: auto;
   border-radius: 8px;
   border: 2px solid black;
`;
export const Name = styled.p`
   color: #808080;
   font-size: 20px;
   margin: 10px 0 20px;
   user-select: none;
`;
export const Item = styled.li`
   max-height: 200px;
   max-width: 200px;
   list-style-type: none;
   text-align: center;
   margin-right: 30px;
   cursor: pointer;
   &:hover > ${Picture} {
      border: 2px solid #fff;
   }
   &:hover ${Name} {
      color: #fff;
      font-weight: 500;
   }
   &:last-of-type {
      margin-right: 0;
   }
`;
