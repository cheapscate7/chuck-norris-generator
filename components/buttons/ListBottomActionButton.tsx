import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const ListBottomActionButton = styled.button`
    box-sizing: border-box;
    width: 100%;
    padding: 1em 2em;
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};
    &:focus,
    :hover {
        ${({ theme }) => css`
            background-color: ${rgba(theme.colors.highlight_1, 0.8)};
            color: ${theme.colors.coloured_button_foreground};
        `};
    }
`;

export default ListBottomActionButton;
