import styled, { css } from 'styled-components';

/**
 * a generic button for adding and removing memes from the favourites list
 */
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
    display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

export default FloatingButton;
