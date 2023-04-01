import characterService from "../../services/CharacterServicce";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/Index";
import Pagination from "../../components/Pagination/Index";
import SearchBar from "../../components/SearchBar/Index";
import { Container, CharactersList, Header } from "./Style";
import Loading from "../../components/Loading/Index";
import Dropdown from "../../components/Dropdown/Index";

interface Filters {
    type: string;
    filter: string;
}

const HomePage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [searchedWord, setSearchedWord] = useState<string>('');
    const [searchButton, setSearchButton] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters[]>([]);

    const getCharactersHandle = async (page: string) => {
        setIsLoading(true);
        const characters = await characterService.getCharacters(page);
        setData(characters.characters);
        setTotalPages(characters.pages);
        setIsLoading(false);
    }

    useEffect(() => {
        getCharactersHandle(currentPage.toString());
    }, [currentPage])

    const logCharacters = () => {
        console.log(searchedWord);
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

    const activateButton = () => {
        if (filters.length === 0 && searchedWord === '') {
            setSearchButton(false);
        } else {
            setSearchButton(true);
        }
    }

    useEffect(() => {
        activateButton()
    }, [filters, searchedWord]);
    
    return (
        <Container>
            <Header>
                <Dropdown label="Filtrar" options={['Status', 'Espécie', 'Tipo', 'Gênero']} onSelect={logCharacters}></Dropdown>
                <SearchBar setSearchedWord={setSearchedWord} buttonFunction={logCharacters} active={searchButton} />
            </Header>
            {isLoading ? <Loading /> : (
                <>
                    <CharactersList>
                        {renderCards()}
                    </CharactersList>
                    <Pagination currentPage={currentPage} total={42} onPageChange={(page) => { setCurrentPage(page) }} />
                </>)
            }
        </Container>
    )
}


export default HomePage;