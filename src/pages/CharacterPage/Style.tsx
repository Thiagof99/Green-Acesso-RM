import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display:flex;
    height: 100vh;
    width: 100vw;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    justify-content: flex-start;
    flex-flow: column;
    overflow-x: hidden;
`;

export const Header = styled.div`
    display: flex;
    height: 10%;
    justify-content: flex-start;
    align-items: center;
`;

export const Body = styled.div`
    align-self: center;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    background-color: ${colors.primary};
    border-radius: 30px;
    height: 100%;
    padding: 16px;
    
    @media (max-width: 750px){
        flex-direction: column;
    }
`;

export const BodyOutline = styled.div`
    border-radius: 36px;
    background-color: black;
    padding: 2px;
    border-width: 3px;
    border-color: ${colors.secondary};
    border-style: solid;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    width: auto;
    align-self: center;
`;

export const IconDiv = styled.div`
    cursor: pointer;
`;

export const Picture = styled.img`
    height: 100%;
    border-radius: 30px;
    max-height: 450px;

    @media (max-width: 750px){
        height: auto;
        width: 100%;
        margin-bottom: 8px;
    }

`;

export const Name = styled.h1`
    display: flex;
    color: ${colors.white};
    font-size: 36px;
    align-self: center;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: bolder;

    @media (max-width: 750px){
        font-size: 32px;
    }
`;

export const TextFields = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    padding-left: 16px;
    flex-wrap: wrap;
    width: 40vw;

    @media (max-width: 750px){
        width: 100%;
    }
`;

export const InfoTitle = styled.p`
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
`;

export const InfoField = styled.p`
    color: ${colors.white};
    font-size: 18px;
    overflow-wrap: break-word;
    margin-top: 0;
    margin-bottom: 0;
`;


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;