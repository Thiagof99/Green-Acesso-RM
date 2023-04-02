import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.button`
  width: 15%;
  height: 34px;
  border-radius: 30px;
  border-style: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 110px;
  @media (max-width: 750px){
    min-width: 34px;
    width: 34px;
    justify-content: center;
  }
`;

export const Label = styled.p`
  padding-left: 8px;
  color: ${colors.white};
  font-weight: bolder;
  font-size: 20px;
  
  @media (max-width: 750px){
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 52px;
  border-radius: 8px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
  background-color: ${colors.primary};
  width: 100%;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  overflow-y: auto;

  @media (max-width: 750px){
    width: 93vw;
  }
`;

export const Option = styled.button`
  border: none;
  background: transparent;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.white};
  
  :hover {
    background-color:#0c4a55;
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
    width: max-content;
`;