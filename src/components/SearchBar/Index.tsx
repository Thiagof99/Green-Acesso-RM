import { BodyOutline, Container, SearchButton, SearchInput } from "./Style";
import Icon from "../Icon/Icon";
import { colors } from "../../styles/colors";

interface SearchBarInterface {
    setSearchedWord: (searchedWord: string) => void;
    buttonFunction: VoidFunction;
    active: boolean;
}

const SearchBar = ({
    setSearchedWord,
    buttonFunction,
    active
}: SearchBarInterface) => {
    return (
        <Container>
            <SearchInput placeholder="Pesquisar..." onChange={(searchedWord) => { setSearchedWord(searchedWord.target.value) }} />
            <BodyOutline active={active}>
                <SearchButton onClick={buttonFunction} active={active}>
                    {active === true ? (
                        <Icon
                            icon={'search'}
                            size={'30px'}
                            color={colors.white}
                        />
                    ) : (
                        <Icon
                            icon={'search'}
                            size={'30px'}
                            color={colors.portal}
                        />
                    )}
                </SearchButton>
            </BodyOutline>
        </Container>
    )
}

export default SearchBar;