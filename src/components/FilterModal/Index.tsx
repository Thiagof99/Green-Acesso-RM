import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { validateGender, validateInputSize, validateStatus } from '../../validations/FilterValidations';
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
    const [inputValue, setInputValue] = useState<string>('');
    const [invalid, setInvalid] = useState<boolean>(false);

    const showInfo = () => {
        if (headerText === 'Status') {
            window.alert('Filtrar pelo status atual do personagem (alive, dead ou unknown).');
        } else if (headerText === 'Espécie') {
            window.alert('Filtrar pela espécie do personagem (human, alien, etc...).');
        } else if (headerText === 'Tipo') {
            window.alert('Filtrar pelo tipo do personagem (robot, fish, etc...).');
        } else if (headerText === 'Gênero') {
            window.alert('Filtrar pelo Gênero do personagem (female, male, genderless ou unknown).')
        }
    };

    const validateFilter = () => {
        if (!validateInputSize(inputValue)) {
            setInvalid(true);
            window.alert('Digite o filtro desejado para que possa adicioná-lo');
            return false;
        }
        if (headerText === 'Status' && !validateStatus(inputValue.toLowerCase())) {
            setInvalid(true);
            showInfo();
            return false;
        } else if (headerText === 'Gênero' && !validateGender(inputValue.toLowerCase())) {
            setInvalid(true);
            showInfo();
            return false;
        }
        setInputValue('');
        return true;
    };

    const addValidFilter = () => {
        if (validateFilter()) {
            addFilter();
        }
    };

    useEffect(() => {
        setInvalid(false);
    }, [inputValue]);

    const hideAndClear = () => {
        hide();
        setInputValue('');
    };

    const modal = (
        <React.Fragment>
            <Backdrop onClick={hideAndClear} />
            <Wrapper>
                <StyledModal>
                    <Header>
                        <HeaderButtons onClick={showInfo}>?</HeaderButtons>
                        <Title>{headerText}</Title>
                        <HeaderButtons onClick={hideAndClear}>X</HeaderButtons>
                    </Header>
                    <Body>
                        <InputFilter invalid={invalid} value={inputValue} placeholder={headerText} onChange={(filter) => {
                            setInput(filter.target.value);
                            setInputValue(filter.target.value);
                        }
                        } />
                    </Body>
                    <Footer>
                        <ModalButton onClick={hideAndClear}>
                            Cancelar
                        </ModalButton>
                        <ModalButton onClick={addValidFilter}>
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