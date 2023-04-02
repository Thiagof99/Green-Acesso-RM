import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Header, StyledModal, Title, HeaderButtons, Backdrop, Body, InputFilter, Footer, ModalButton } from './Style';

export interface FilterModalInterface {
    isShown: boolean;
    hide: () => void;
    headerText: string;
    addFilter: VoidFunction;
    setInput: (value: string) => void;
};

const FilterModal = ({
    isShown,
    hide,
    headerText,
    addFilter,
    setInput
}: FilterModalInterface) => {
    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide} />
            <Wrapper>
                <StyledModal>
                    <Header>
                        <HeaderButtons>?</HeaderButtons>
                        <Title>{headerText}</Title>
                        <HeaderButtons onClick={hide}>X</HeaderButtons>
                    </Header>
                    <Body>
                        <InputFilter placeholder={headerText} onChange={(filter) => { setInput(filter.target.value) }} />
                    </Body>
                    <Footer>
                        <ModalButton onClick={hide}>
                            Cancelar
                        </ModalButton>
                        <ModalButton onClick={addFilter}>
                            Adicionar
                        </ModalButton>
                    </Footer>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default FilterModal;