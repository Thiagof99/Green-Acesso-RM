import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-radius: 10px;
    height: 320px;
    width: 260px;
    background-color: #3a6f9e;
    flex-flow: column;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    align-items: center;
    margin: 10px;
`

export const CharacterImage = styled.img`
    width: 100%;
    border-radius: 10px;
`
export const CharacterName = styled.p`
    font-size: 18px;
    font-weight: bolder;
`
