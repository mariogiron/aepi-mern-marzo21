import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px 20px;
    color: 'white';
    border: none;
    background-color: #7e7e7e;
    margin: 20px;
    ${({ primary }) => primary && css`
            color: red;
            background-color: ${props => props.bgColor};
        `
    }
`;

export function Button({ children, primary, bgColor }) {
    return (
        <>
            <StyledButton primary={primary} bgColor={bgColor}>{children}</StyledButton>
        </>
    );
}