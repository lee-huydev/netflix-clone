import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
export const Container = styled.div`
   max-width: 450px;
   width: 100%;
   padding: 60px 68px 40px;
   background-color: rgba(0, 0, 0, 0.75);
   border-radius: 5px;
   margin: 100px auto;
   display: flex;
   flex-direction: column;
`;
export const Frame = styled.form`
   display: flex;
   flex-direction: column;
   max-width: 450px;
   width: 100%;
`;
export const Title = styled.h1`
   font-size: 32px;
   color: #fff;
   font-weight: bold;
   margin-bottom: 28px;
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Text = styled.p`
   color: #737373;
   margin-top: 70px;
   display: block;
`;
export const TextSmall = styled.span`
   font-size: 13px;
   color: #8c8c8c;
`;
export const Wrapper = styled.div`
   position: relative;
`;

export const Label = styled.label`
   position: absolute;
   font-size: ${(props) => (props.isValid !== '' ? '11px' : '15px')};
   left: 20px;
   top: ${(props) => (props.isValid !== '' ? '6px' : '15px')};
   color: #8c8c8c;
   pointer-events: none;
   cursor: text;
   transition: all 0.2s ease-in 0s;
`;
export const Option = styled.label`
   position: absolute;
   font-size: 14px;
   right: 15px;
   top: 17px;
   color: #8c8c8c;
   cursor: pointer;
   user-select: none;
`;
export const Input = styled.input`
   padding: 16px 20px 5px;
   color: #fff;
   margin-bottom: 16px;
   background-color: #333;
   border: none;
   border-radius: 4px;
   width: 100%;
   height: 50px;
   outline: none;
   &:focus ~ ${Label} {
      font-size: 11px;
      top: 6px;
   }
`;
export const Submit = styled.button`
   background: #e50914;
   border-radius: 4px;
   font-size: 16px;
   padding: 16px;
   font-weight: bold;
   margin: 24px 0 12px;
   color: #fff;
   cursor: pointer;
   border: none;
   width: 100%;
   &:disabled {
      opacity: 0.5;
      cursor: default;
   }
`;
export const Link = styled(RouterLink)`
   text-decoration: none;
   color: #fff;
   &:hover {
      text-decoration: underline;
      cursor: pointer;
   }
`;
