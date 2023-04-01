import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column;
    align-items: center;
    padding: 5%;
`

export const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`

export const Header = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100vw;
    align-items: center;
    gap: 8px;
    margin-bottom: 10vh;
`