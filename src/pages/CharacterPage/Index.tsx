import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "../../models/CaracterModel";
import characterService from "../../services/CharacterServicce";
import Loading from "../../components/Loading/Index";
import { Body, BodyOutline, Container, Header, IconDiv, InfoContainer, InfoField, InfoTitle, Name, Picture, TextFields } from "./Style";
import Icon from "../../components/Icon/Icon";
import { colors } from "../../styles/colors";

const CharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<string>();
    const [character, setCharacter] = useState<Character | null>(null);

    const getCharactersHandle = async () => {
        setCharacter(null);
        const characters = await characterService.getCharacter(id);
        setCharacter(characters.character);
    };

    const backToHome = () => {
        navigate('/home');
    }

    useEffect(() => {
        getCharactersHandle();
    }, [id])

    return (
        <>
            {character === null ? <Loading /> :
                <Container>
                    <Header>
                        <IconDiv onClick={backToHome}>
                            <Icon icon={'arrow_back'} color={colors.white} size={'40px'} />
                        </IconDiv>
                    </Header>
                    <BodyOutline>
                        <Body>
                            <Picture src={character.image} />
                            <TextFields>
                                <Name>{character.name}</Name>
                                <InfoContainer>
                                    <InfoTitle>
                                        Status:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.status}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        Species:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.species}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        type:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.type}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        Gender:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.gender}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        Origin:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.origin?.name}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        Location:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.location?.name}
                                    </InfoField>
                                </InfoContainer>
                                <InfoContainer>
                                    <InfoTitle>
                                        Episode count:
                                    </InfoTitle>
                                    <InfoField>
                                        {character.episode?.length}
                                    </InfoField>
                                </InfoContainer>
                            </TextFields>
                        </Body>
                    </BodyOutline>
                </Container>
            }
        </>
    )
}

export default CharacterPage;