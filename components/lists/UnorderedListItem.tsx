import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const UnorderedListItem = styled.li`
    max-height: 100vh;
    margin: 0 1em;
    display: flex;
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.foreground};
    `};
    a,
    button {
        box-sizing: border-box;
        width: 100%;
        flex-grow: 1;
        padding: 1em;
        transition: 0.2s ease;
        &:focus,
        :hover {
            padding-left: 1.5em;
            padding-right: 0.5em;
            ${({ theme }) => css`
                background-color: ${rgba(theme.colors.highlight_1, 0.3)};
            `};
        }
    }
`;

export default UnorderedListItem;
