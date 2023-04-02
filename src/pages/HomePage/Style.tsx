import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
`;

export const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
`;

export const Header = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100vw;
    align-items: center;
    gap: 8px;
`;

export const FilterTagsContainer = styled.div`
    display: flex;
    flex-flow: row;
    width: 57.5%;
    gap: 8px;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 4vh;
    margin-top: 8px;
    height: 50px;
`;

export const Logo = styled.img`
    width: 30%;
    top: 0;

    @media (max-width: 750px){
        width: 50%;
    }
`
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
    margin-left: -5%;

    @media(max-width: 750px){
        margin-left: -12%;
    }
`;

export const body = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
    margin-left: -5%;
`;