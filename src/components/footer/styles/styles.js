import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  margin-top: ${({second}) => second ? '-320px' : 'auto'};
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 90px;

`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    color: #757575;
    text-decoration: underline
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  padding-left: 90px;
  &:hover {
    color: #757575;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
  padding-left: 90px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const GrIcons = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: -15px;
  gap: 25px;
  color: #fff;
  font-size: 25px;
`