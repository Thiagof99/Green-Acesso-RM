import styled from "styled-components";
import { colors } from "../../styles/colors";

interface Props {
    active?: boolean;
}
export const Container = styled.div`
    display: flex;
    width: 60%;
    border-radius: 5px;
    gap: 8px;
    align-items: center;
`;

export const SearchButton = styled.div<Props>`
    display: flex;
    width: 15%;
    min-width: 34px;
    height: 44px;
    background-color: ${props => props.active ? colors.portal : 'transparent'};
    border-color: ${colors.portal};
    border-radius: 30px;
    border-style: solid;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.active ? 'pointer' : 'default'};
`;

export const SearchInput = styled.input`
    background-color: transparent;
    width: 82%;
    font-size: 18px;
    padding: 8px;
    padding-left: 16px;
    outline: none;
    border-width: 3px;
    border-color: ${colors.portal};
    border-radius: 30px;
    border-style: solid;
    color: ${colors.portal};

    ::placeholder{
        color: ${colors.portal};
        opacity: 50%;
    }
`;