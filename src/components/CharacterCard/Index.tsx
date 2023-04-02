import { useNavigate } from "react-router-dom";
import { BodyOutline, CharacterImage, CharacterName, Container } from "./Style";

interface CharacterCardInterface {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    image?: string;
    id?: number;
}

const CharacterCard = ({
    name,
    status,
    species,
    type,
    gender,
    image,
    id
}: CharacterCardInterface) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/character/${id?.toString()}`);
    }

    return (
        <BodyOutline>
            <Container onClick={handleClick}>
                <CharacterImage src={image} alt="new" />
                <CharacterName>
                    {name}
                </CharacterName>
            </Container>
        </BodyOutline>
    );
}

export default CharacterCard;