import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    list-style-type: none;
`

export const Page = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 48px;
    margin: 5px;
    color: #39ff14;;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #39ff14;
        color: white;
        cursor: pointer;
    }
`

export const CurrentPage = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 48px;
    margin: 5px;
    background-color: #39ff14;;
    color: white;
    justify-content: center;
    align-items: center;
    cursor: default;
`

export const DisabledPage = styled.li`
    display: flex;
    height: 48px;
    width: 48px;
    font-size: 24px;
    border-radius: 48px;
    margin: 5px;
    color: gray;
    justify-content: center;
    align-items: center;
    cursor: default;
`