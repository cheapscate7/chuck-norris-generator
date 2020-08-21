import styled, { css } from 'styled-components';

const UnorderedListItem = styled.li`
    margin: 0 1em;
    display: flex;
    padding: 1em;
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.foreground};
    `};
`;

export default UnorderedListItem;
