import { Container, DeleteButton, TagText } from "./Style";

interface FilterTagInterface {
    filterText: string;
    onClick: VoidFunction;
}
const FilterTag = ({
    filterText,
    onClick
}: FilterTagInterface) => {
    return (
        <Container>
            <TagText>{filterText}</TagText>
            <DeleteButton onClick={onClick}>x</DeleteButton>
        </Container>
    )
}

export default FilterTag;