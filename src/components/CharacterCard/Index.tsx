import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../LocalStorage";
import { colors } from "../../styles/colors";
import Icon from "../Icon/Icon";
import { BodyOutline, CharacterImage, CharacterName, Container, Favorite, InfoContainer } from "./Style";

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
    const favorite = new (LocalStorage);
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(id ? favorite.getFavorites().includes(id?.toString()) : false);

    const addFavorite = () => {
        if (id) {
            favorite.saveFavorite(id.toString());
            setIsFavorite(true);
        }
    }

    const deleteFavorite = () => {
        if (id) {
            favorite.deleteFavorite(id.toString());
            setIsFavorite(false);
        }
    }

    const handleClick = () => {
        navigate(`/character/${id?.toString()}`);
    }

    return (
        <BodyOutline>
            <Container>
                <CharacterImage src={image} alt="new" onClick={handleClick} />
                <InfoContainer>
                    <CharacterName onClick={handleClick}>
                        {name}
                    </CharacterName>
                    {isFavorite ?
                        <Favorite onClick={deleteFavorite}>
                            <Icon icon={'favorite'} color={colors.secondary} size={'40px'} />
                        </Favorite>
                        :
                        <Favorite onClick={addFavorite}>
                            <Icon icon={'favorite'} color={colors.white} size={'35px'} />
                        </Favorite>}
                </InfoContainer>
            </Container>
        </BodyOutline>
    );
}

export default CharacterCard;
