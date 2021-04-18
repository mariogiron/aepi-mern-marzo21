import styled from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: ${props => props.width + 'px'};
`;

export const PaginationWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => {
        if (props.page === 'primera') return 'flex-end';
        else if (props.page === 'ultima') return 'flex-start';
        else return 'space-between';
    }};
`;