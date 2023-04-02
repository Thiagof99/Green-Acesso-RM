import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    border-radius: 10px;
    height: 320px;
    width: 260px;
    background-color: ${colors.primary};
    flex-flow: column;
    align-items: center;
    padding-left: 5px;
    padding-top: 5px;
    padding-right: 5px;
    cursor: pointer;
`

export const CharacterImage = styled.img`
    width: 100%;
    border-radius: 10px;
`
export const CharacterName = styled.p`
    font-size: 18px;
    font-weight: bolder;
    color: ${colors.white};
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 90%;
`
export const BodyOutline = styled.div`
    border-radius: 15px;
    background-color: black;
    padding: 2px;
    border-width: 3px;
    border-color: ${colors.secondary};
    border-style: solid;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    width: auto;
`;