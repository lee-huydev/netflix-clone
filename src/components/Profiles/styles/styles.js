import styled from 'styled-components/macro';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 100px auto;
   width: 100%;
`;

export const Frame = styled.div`
   width: 500px;
   text-align: left;
`
export const Inner = styled.div`
   padding: 30px 0;
   display: flex;
   align-items: center;
`
export const Input = styled.input`
   width: 100%;
   height: 35px;
   margin-left: 20px;
   border-radius: 5px;
   border: none;
   outline: none;
   padding: 5px 10px;
   background-color: #6666;
   color: #c5c5c5;
`
export const Button = styled.button`
   border: 1px solid #ccc;
   padding: ${props => props.pd ? props.pd : '5px 20px'};
   background-color: ${({second}) => second ? 'transparent' : '#E5E5E5'};
   color: ${({second}) => second ? '#ccc' : '#050505'};
   margin-right: 10px;
   font-size: 16px;
   font-size: ${props => props.size ? props.size : '16px'};
   font-weight: 400;
   opacity: ${props => props.blur ? props.blur : '1'};
   &:hover {
      cursor: pointer;
      opacity: ${props => props.blurHover ? props.blurHover : '0.5'};
      background-color: ${({hoverColor}) => hoverColor && '#DE1310'};
      border-width: ${({hoverColor}) => hoverColor && 0} 
   }
`
export const Title = styled.h2`
   width: 500px;
   margin: 100px auto 20px;
   color: #fff;
   font-size: 48px;
   text-align: ${({second}) => second ? 'left' : 'center'};
   font-weight: 500;
   @media (max-width: 1024px) {
      font-size: 40px;
   }
`;

export const SubTitle = styled.p`
   text-align: left;
   width: fit-content;
`

export const Error = styled.p`
   color: #fff;
   background: #e87c03;
   padding: 5px;
   border-radius: 5px;
`
export const List = styled.ul`
   padding: 50px 0 100px;
   margin: 0;
   display: flex;
   flex-direction: row;
`;
export const Picture = styled.img`
   width: 100%;
   max-width: 150px;
   max-width: ${({second}) => second ? '110px': '150px'};
   height: auto;
   border-radius: 8px;
   border: 2px solid black;
   @media (max-width: 1024px) {
      max-width: 120px;
   }
`;
export const Name = styled.p`
   color: #808080;
   font-size: 20px;
   margin: 10px 0 20px;
   user-select: none;
`;
export const IconAdd = styled.div`
   .icon-add {
      width: 95px;
      height: 153px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      align-items: center;
   }
`;
export const Edit = styled.div`
   background-color: rgba(0,0,0,0.5);
   position: absolute;
   z-index: 9999;
   width: 100%;
   height: 100%;
   .icon-edit {
      color: #fff;
      font-size: 35px;
      margin-top: 50%;
      font-weight: bold;
      transform: translateY(-50%)
   }
`
export const Item = styled.li`
   max-height: 200px;
   position: relative;
   max-width: 200px;
   list-style-type: none;
   text-align: center;
   margin-right: 50px;
   cursor: ${({notAllow}) => notAllow === true ? 'not-allowed' : 'pointer'};
   &:hover > ${Picture} {
      border: 2px solid #fff;
   }
   &:hover > ${IconAdd} {
      color: #fff;
   }
   &:hover ${Name} {
      color: #fff;
      font-weight: 500;
   }
   &:last-of-type {
      margin-right: 0;
   }
`;