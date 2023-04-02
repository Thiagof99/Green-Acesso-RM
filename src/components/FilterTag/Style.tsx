import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.secondary};
    max-width: 200px;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 18px;
    color: ${colors.white};
    border-radius: 20px;
    gap: 8px;
    height: 34px;
`;

export const DeleteButton = styled.div`
    font-size: 22px;
    border: none;
    border-radius: 3px;
    background: none;
    color: ${colors.white};
    font-weight: bolder;
    cursor: pointer;
`

export const TagText = styled.p`
    color: ${colors.white};
    text-overflow: ellipsis;
    font-size: 18px;
    overflow: hidden;
`