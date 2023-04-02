import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.button`
  width: 15%;
  height: 44px;
  border-radius: 30px;
  border-style: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-width: 100px;
  max-width: 120px;
`;

export const Label = styled.p`
  padding-left: 8px;
  color: ${colors.white};
  font-weight: bolder;
  font-size: 20px;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 52px;
  border-radius: 30px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
  background-color: ${colors.secondary};
  width: 100%;
  max-height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  overflow-y: auto;
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
    background-color:#2bba10;
  }
`;