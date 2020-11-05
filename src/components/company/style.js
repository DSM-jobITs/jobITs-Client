import styled from "styled-components";

export const CompanysWarpper = styled.div`
  width: 70%;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

export const Companys = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;
  width: 70%;
  grid-auto-rows: 12rem;

@media screen and (max-width: 1090px) {
    grid-template-columns: repeat(2, minmax(5rem, 1fr));
    width: 70%;
}
`;

export const Container = styled.div`
  width : ${props => props.passer ? '100%' : '23%'};
  height : 30%;
  border-top : ${props => props.passer ? '1px solid #BDBDBD' : 'none'};
`;

export const ImgContainer = styled.img`
  width: ${props => props.detail ? '20rem' : '100%'};
  height: ${props => props.detail ? '15rem' : '11rem'};
`;

export const CompanysTitle = styled.p`
  text-align: ${props => {
    if (props.detail) return '';
    else if (props.text) return '';
    else return 'center';
}};
  font-size : ${props => props.detail ? '0.9rem' : ''};
  color : ${props => props.text ? '#A3A3A3' : ''};
  border-left : ${props => props.detail ? '1px solid #A3A3A3' : 'none'};
  padding-left : ${props => props.detail ? '1rem' : 'none'};
`;

export const Title = styled.h1`
  width: ${props => props.detail ? '' : '100%'};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Header = styled.div`
  margin-top: 70px;
  margin : 1rem 30rem 0rem 30rem;
  width: 70%;
  height: 100px;
`

export const DetailContainer = styled.section`
  width : 56.94rem;
  height : 100%;
  margin : ${props => props.detail ? '10rem auto 0 auto' : ''};
  padding : ${props => {
    if (props.passer) return '2rem 0 0 1.2rem';
    else if (props.detailBox) return '0 0 8rem 0';
    else return '';
}};
  display : ${props => props.detailBox ? 'flex' : ''};
  align-items : center;
  justify-content : space-around;
`;

export const FlexContainer = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`;

export const CompanyColorText = styled.span`
  color : #D81919;
  font-weight : 500;
`;

export const Passer = styled.h3`
`;

export const PasserText = styled.p`
`;

export const div = styled.div``;

export const Button = styled.button`
  background-color : #F6F6F6;
  color : #707070;
  font-weight : 500;
  border : none;
  border-radius : 999px;
  width : 8rem;
  height : 2.5rem;
  margin : 0rem 1rem 2rem 0;

  &:hover {
    background-color : #CCCCCC;
    transition : 0.3s
}
`;

export const AddText = styled.p`
  margin-left : 0.3rem;
  font-size : 0.8rem;
  color : #707070;
`;