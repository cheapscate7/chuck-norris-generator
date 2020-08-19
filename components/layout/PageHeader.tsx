import styled, { css } from 'styled-components';

const PageHeader = styled.nav`
    padding: 0.2em 0.4em;
    ${({ theme }) => css`
        background-color: ${theme.colors.highlight_1};
        color: ${theme.colors.coloured_button_foreground};
    `};

    @media (max-width: 320px) {
    }
`;

export default PageHeader;
