import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.ul`
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    list-style-type: none;
    gap: 5px;
`

export const Page = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 48px;
    color: ${colors.secondary};
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: ${colors.secondary};
        color: ${colors.white};
        cursor: pointer;
    }

    @media (max-width: 750px){
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
`

export const CurrentPage = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 48px;
    background-color: ${colors.secondary};
    color: white;
    justify-content: center;
    align-items: center;
    cursor: default;

    @media (max-width: 750px){
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
`

export const DisabledPage = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    border-radius: 48px;
    color: ${colors.gray};
    justify-content: center;
    align-items: center;
    cursor: default;

    @media (max-width: 750px){
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
`