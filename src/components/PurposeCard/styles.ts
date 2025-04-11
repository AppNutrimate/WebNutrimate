import styled from "styled-components";

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0;
  padding: 20px;
  border-radius: 50px;
  background-color:${(props) => props.theme.colors.primaryBlack};
`;

export const TitleContainer = styled.div`
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 10px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    font-family: 'Almarena', sans-serif;
    color: white;
    text-align: center;
`

export const SubTitle = styled.h2`
    font-size: .8rem;
    font-family: 'Almarena', sans-serif;
    color: white;
    text-align: right;
    font-weight: normal;
    width: 25%;
    line-height: 1rem;
    @media (max-width: 1000px) {
        width: 50%;
        text-align: center;
        margin-top: 10px;
        font-size: 1rem;
    }
`;

export const GridBar = styled.div`
    justify-content: center;
    align-items: center;
    width: 97%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lightGray};
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 400px;
    margin: 0 10px;
    border-radius: 20px;
    background-color: ${(props)=> props.theme.colors.secondaryBlack};
    &:hover {
        background-color: ${(props)=> props.theme.colors.primaryPurple};
        transition: 0.5s;
        border-radius: 20px 20px 20px 50%;
    }
    `;

export const TitleContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

export const CardTitle = styled.h1`
    font-size: 3rem;
    font-family: 'Almarena', sans-serif;
    color: white;
    margin-top: 20px;
    font-weight: bold;
`;

export const ArrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primaryPurple};
`;

export const ArrowText = styled.h1`
    font-size: 3rem;
    font-family: 'Almarena', sans-serif;
    color: white;
    text-align: center;
    justify-content: center;
    transform: rotate(-45deg);
`;