import styled from 'styled-components/macro';

export const Frame = styled.div`
   width: 600px;
   margin: 100px auto 0;
   a {
       text-decoration: none;
       color: #fff;
   }
`;

export const Title = styled.h2`
   color: #fff;
   font-size: 30px;
`;
export const SubTitle = styled.p`
   padding: 10px;
   font-size: 16px;
   color: #fff;
   background-color: ${({ status }) =>
      status === true ? '#8FCE00' : '#e87c03'};
   border-radius: 5px;
   span {
       display: block;
       margin-top: 5px;
       text-decoration: underline;
       font-weight: 400;
   }
`;
export const OptionGr = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const Button = styled.button`
   padding: 8px 25px;
   margin-right: 10px;
   margin-top: 5px;
   font-size: 16px;
   background-color: ${({ second }) => (second ? 'transparent' : '#fff')};
   color: ${({ second }) => (second ? '#ccc' : '#050505')};
   border: 1px solid #ccc;
   &:hover {
      cursor: pointer;
      opacity: ${(props) => (props.blurHover ? props.blurHover : '0.5')};
      background-color: ${({ hoverColor }) => hoverColor && '#DE1310'};
      border-width: ${({ hoverColor }) => hoverColor && 0};
   }
`;

export const Redirect = styled.p`
    font-size: 16px;
    margin-left: 20px;
    &:hover {
        text-decoration: underline;
    }
`
