import styled, { css } from 'styled-components';

const FloatingButton = styled.button`
    position: relative;
    top: 0;
    right: 0;
    padding: 0.5em 1em;
    border-radius: 5px;
    margin: 0.2em;
    ${({ theme }) => css`
        background-color: ${theme.colors.highlight_1};
        color: ${theme.colors.coloured_button_foreground};
        font-size: ${theme.fontSizes.small};
    `};
`;

export default FloatingButton;
