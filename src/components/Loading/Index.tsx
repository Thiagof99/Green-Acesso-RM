import { Container, PortalImage, Dot, TextContainer, LoadingText } from "./Style";

const Loading = () => {
    return (
        <Container>
            <PortalImage src={require("../../assets/Portal2.png")} />
            <TextContainer>
                <LoadingText>
                    Carregando
                </LoadingText>
                <Dot />
                <Dot />
                <Dot />
            </TextContainer>
        </Container>
    )
}

export default Loading;