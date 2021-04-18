import styled from 'styled-components';

import { Button } from './UI/Button';
import SuperButton from './UI/SuperButton';
import { FlexDivRow, PaginationDiv } from './UI/styled/index';

const StyledDiv = styled.div`
    background-color: red;
    border: 1px solid black;
    padding: 20px;
`;

const StyledButton = styled.button`
    background-color: indigo;
    color: ${props => props.colorTexto === 'dark' ? 'black' : 'white'};
    font-size: 24px;
    border: 0;
`

function Main() {
    return (
        <StyledDiv>
            Contenido del DIV
            <StyledButton colorTexto="dark">Pulsa</StyledButton>
            <StyledButton colorTexto="light">LUZ!!</StyledButton>
            <FlexDivRow>
                <Button primary bgColor="green">HOME</Button>
                <Button primary bgColor="indigo">CONTACT</Button>
                <SuperButton primary>SUPER</SuperButton>
            </FlexDivRow>
            <PaginationDiv page="ultima">
                <Button>Anterior</Button>
                <Button>Siguiente</Button>
            </PaginationDiv>
        </StyledDiv>
    );
}

export default Main;