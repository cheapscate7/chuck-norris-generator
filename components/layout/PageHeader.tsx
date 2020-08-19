import styled, { css } from 'styled-components';

const PageHeader = styled.nav`
    padding: 0.2em 0.4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => css`
        background-color: ${theme.colors.highlight_1};
        color: ${theme.colors.coloured_button_foreground};
    `};

    @media (max-width: 320px) {
    }
`;

export default PageHeader;
