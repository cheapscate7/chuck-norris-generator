import styled, { css } from 'styled-components';

/**
 * the title of a joke in the JokeListItem component
 */
const JokeListItemTitle = styled.h3`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};
`;

export default JokeListItemTitle;
