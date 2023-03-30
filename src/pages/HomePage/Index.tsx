import characterService from "../../services/CharacterServicce";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/Index";
import Pagination from "../../components/Pagination/Index";
import { Container, CharactersList } from "./Style";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getCharactersHandle = async () => {
        const characters = await characterService.getCharacters('33');
        setData(characters.characters);
        setIsLoading(false);
    }

    useEffect(() => {
        getCharactersHandle();
    }, [])

    const logCharacters = () => {
        console.log(data);
    }

    const renderCards = () => {
        if (data.length === 0) {
            return <h1>Sem resultados</h1>;
        }

        return data && data.map((character) => (
            <CharacterCard
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                type={character.type}
                gender={character.gender}
                image={character.image}
            />
        ));
    }
    return (
        <Container>
            <h1> Hello, world!</h1 >
            <CharactersList>
                {renderCards()}
            </CharactersList>
            <Pagination currentPage={currentPage} total={42} onPageChange={(page) => { setCurrentPage(page) }} />
        </Container>
    )
}


export default HomePage;