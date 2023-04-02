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

    @media (max-width: 750px){
        width: 80%;
    }
`;

export const SearchButton = styled.div<Props>`
    display: flex;
    width: ${props => props.active ? '110px' : '120px'};
    height: ${props => props.active ? '34px' : '44px'};
    background-color: ${props => props.active ? colors.primary : 'transparent'};
    border-color: ${colors.secondary};
    border-radius: 30px;
    border-style: ${props => props.active ? 'none' : 'solid'};
    justify-content: center;
    align-items: center;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    @media (max-width: 750px){
        width: ${props => props.active ? '34px' : '44px'};
    }
`;

export const SearchInput = styled.input`
    background-color: transparent;
    width: 82%;
    font-size: 18px;
    padding: 8px;
    padding-left: 16px;
    outline: none;
    border-width: 3px;
    border-color: ${colors.secondary};
    border-radius: 30px;
    border-style: solid;
    color: ${colors.secondary};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    ::placeholder{
        color: ${colors.secondary};
        opacity: 50%;
    }

    @media (max-width: 750px){
        width: 100%;
    }
`;

export const BodyOutline = styled.div<Props>`
    border-radius: 36px;
    background-color:  ${props => props.active ? 'black' : 'transparent'};
    padding: 2px;
    border-width: 3px;
    border-color: ${colors.secondary};
    border-style:  ${props => props.active ? 'solid' : 'none'};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    width: auto;
`;