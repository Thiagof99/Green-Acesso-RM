import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const portalAnimation = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.25) rotate(180deg);
}
100% {
  transform: scale(1) rotate(360deg);
}
`;

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const PortalImage = styled.img`
width: 20vw;
height: 20vw;
object-fit: cover;
animation: ${portalAnimation} 5s linear infinite;
transform-origin: center center;
position: relative;
`;



export const TextContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
`;

export const LoadingText = styled.p`
    font-size: 32px;
    font-weight: bolder;
    color: #39ff14;
    margin-right: 10px;
`



export const Dot = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 11px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${dotAnimation} 1s ease-in-out infinite;
  background-color: #c1f762;
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;