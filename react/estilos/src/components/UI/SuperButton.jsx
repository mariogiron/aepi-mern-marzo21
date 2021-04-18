import styled from 'styled-components';

import { StyledButton } from './Button';

const NewStyledButton = styled(StyledButton)`
    font-size: 30px;
`;

function SuperButton({ children, primary, bgColor }) {
    return <NewStyledButton primary={primary} bgColor={bgColor}>{children}</NewStyledButton>
}

export default SuperButton;