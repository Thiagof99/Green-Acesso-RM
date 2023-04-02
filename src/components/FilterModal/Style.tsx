import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface ButtonProps {
    type?: string;
}

interface InputProps {
    invalid?: boolean;
}

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 700;
    width: inherit;
    outline: 0;
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 500;
`;

export const StyledModal = styled.div`
    display: flex;
    z-index: 100;
    background: ${colors.secondary};
    position: relative;
    margin: auto;
    border-radius: 8px;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
`;

export const Header = styled.div`
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    color: ${colors.white};
    align-self: center;
    font-weight: bolder;
    font-size: 22px;
`;

export const HeaderButtons = styled.button`
    font-size: 22px;
    border: none;
    border-radius: 3px;
    background: none;
    color: ${colors.white};
    font-weight: bolder;
    cursor: pointer;
`;

export const Body = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    width: 100%;
`;

export const InputFilter = styled.input<InputProps>`
    background-color: transparent;
    width: 90%;
    font-size: 18px;
    padding: 8px;
    padding-left: 16px;
    outline: none;
    border-width: 3px;
    border-color: ${props => props.invalid ? 'red' : colors.white};
    border-radius: 30px;
    border-style: solid;
    color: ${colors.white};

    ::placeholder{
        color: ${colors.white};
        opacity: 80%;
    }
`

export const Footer = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    width: 100%;
    flex-flow: row;
    gap: 8px;
`;

export const ModalButton = styled.div<ButtonProps>`
    display: flex;
    width: 40%;
    min-width: 34px;
    height: 44px;
    background-color: ${props => props.type === 'primary' ? colors.white : 'transparent'};
    font-size: 18px;
    font-weight: bolder;
    color: ${props => props.type === 'primary' ? colors.secondary : colors.white};
    border-color: ${colors.white};
    border-radius: 30px;
    border-style: solid;
    justify-content: center;
    align-items: center;
    cursor: pointer;

      :hover {
        background-color: ${props => props.type === 'primary' ? 'transparent' : colors.white};
        color: ${props => props.type === 'primary' ? colors.white : colors.secondary};
    }
`;
