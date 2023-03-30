import { CharacterImage, CharacterName, Container } from "./Style";

interface CharacterCardInterface {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    image?: string;
}

const CharacterCard = ({
    name,
    status,
    species,
    type,
    gender,
    image
}: CharacterCardInterface) => {
    return (
        <Container>
            <CharacterImage src={image} alt="new"/>
            <CharacterName>
                {name}
            </CharacterName>
        </Container>
    );
}

export default CharacterCard;