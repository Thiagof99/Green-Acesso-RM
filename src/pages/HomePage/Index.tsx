import characterService from "../../services/CharacterServicce";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/Index";
import Pagination from "../../components/Pagination/Index";
import SearchBar from "../../components/SearchBar/Index";
import { Container, CharactersList, Header, FilterTagsContainer } from "./Style";
import Loading from "../../components/Loading/Index";
import Dropdown from "../../components/Dropdown/Index";
import FilterModal from "../../components/FilterModal/Index";
import FilterTag from "../../components/FilterTag/Index";

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
    const [filterModalToggle, setFilterModalToggle] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [filterName, setFilterName] = useState<string>('');

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
        console.log(filters);
        console.log(filters.length)
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

    const renderFilters = () => {
        if (filters.length === 0) {
            return <></>;
        }
        return filters && filters.map((filter, index) => (
            <FilterTag
                filterText={filter.filter}
                onClick={() => {
                    const newFilters: Filters[] = [...filters];
                    newFilters.splice(index, 1);
                    setFilters(newFilters);
                }}
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
    }, [filters.length, searchedWord]);

    const toggleModal = () => {
        setFilterModalToggle(!filterModalToggle);
    };

    const selectFilter = (selectedFilter: string) => {
        setSelectedFilter(selectedFilter);
        toggleModal();
    };

    const addFilter = () => {
        let newFilter: Filters = {
            type: '',
            filter: ''
        };

        if (selectedFilter === 'Status') {
            newFilter.type = 'status';
        } else if (selectedFilter === 'Espécie') {
            newFilter.type = 'species';
        } else if (selectedFilter === 'Tipo') {
            newFilter.type = 'type';
        } else if (selectedFilter === 'Gênero') {
            newFilter.type = 'gender';
        }

        if (filterName !== '') {
            newFilter.filter = filterName;
            filters.push(newFilter);
            toggleModal();
            setSelectedFilter('');
            setFilterName('');
        }
    };

    return (
        <Container>
            <Header>
                <Dropdown label="Filtrar" options={['Status', 'Espécie', 'Tipo', 'Gênero']} onSelect={selectFilter}></Dropdown>
                <SearchBar setSearchedWord={setSearchedWord} buttonFunction={logCharacters} active={searchButton} />
            </Header>
            <FilterTagsContainer>
                {renderFilters()}
            </FilterTagsContainer>
            <Loading></Loading>
            {isLoading ? <Loading /> : (
                <>
                    <CharactersList>
                        {renderCards()}
                    </CharactersList>
                    <Pagination currentPage={currentPage} total={42} onPageChange={(page) => { setCurrentPage(page) }} />
                </>)
            }
            <FilterModal isShown={filterModalToggle} hide={toggleModal} headerText={selectedFilter} addFilter={addFilter} setInput={setFilterName} />
        </Container>
    )
}


export default HomePage;