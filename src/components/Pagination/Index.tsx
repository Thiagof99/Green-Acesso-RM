import { Container, CurrentPage, DisabledPage, Page } from "./Style";

interface PaginationInterface {
    currentPage: number;
    total: number;
    onPageChange: (page: number) => void;
}

const range = (start: number, end: number) => {
    const pages = Array.from({ length: end - start }, (_, i) => i);
    return pages.map((el) => el + start);
};

const getPagesCut = (pagesCount: number, pagesCutCount: number, currentPage: number) => {
    const ceil = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);


    if (pagesCount < pagesCutCount) {
        return { start: 1, end: pagesCount + 1 };
    } else if (currentPage >= 1 && currentPage <= ceil) {
        return { start: 1, end: pagesCutCount + 1 };
    } else if (currentPage + floor >= pagesCount) {
        return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
    } else {
        return { start: currentPage - ceil + 1, end: currentPage + floor + 1 };
    }
};

interface PaginationItemInterface {
    page: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    isDisabled?: boolean;
    buttonText: string;
}
const PaginationItem = ({
    page,
    currentPage,
    onPageChange,
    isDisabled,
    buttonText
}: PaginationItemInterface) => {
    if (isDisabled) {
        return (
            <DisabledPage>
                {buttonText}
            </DisabledPage>
        )
    }
    if (currentPage === page) {
        return (
            <CurrentPage>
                {buttonText}
            </CurrentPage>
        )
    }
    return (
        <Page onClick={() => onPageChange(page)}>
            {buttonText}
        </Page>
    )
};

const Pagination = ({ currentPage, total, onPageChange }: PaginationInterface) => {
    const pagesCut = getPagesCut(total, 5, currentPage);
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === total;
    return (
        <Container className="pagination">
            <PaginationItem
                page={1}
                currentPage={currentPage}
                onPageChange={onPageChange}
                isDisabled={isFirstPage}
                buttonText="<<"
            />
            <PaginationItem
                page={currentPage - 1}
                currentPage={currentPage}
                onPageChange={onPageChange}
                isDisabled={isFirstPage}
                buttonText="<"
            />
            {pages.map((page) => (
                <PaginationItem
                    page={page}
                    key={page}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    buttonText={page.toString()}
                />
            ))}
            <PaginationItem
                page={currentPage + 1}
                currentPage={currentPage}
                onPageChange={onPageChange}
                isDisabled={isLastPage}
                buttonText=">"
            />
            <PaginationItem
                page={total}
                currentPage={currentPage}
                onPageChange={onPageChange}
                isDisabled={isLastPage}
                buttonText=">>"
            />
        </Container>
    );
};
export default Pagination;