import styled, { css } from 'styled-components';

const NavigationItem = styled.li`
    padding: 0.2em 0.4em;
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};
`;

export default NavigationItem;
