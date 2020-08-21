import styled, { css } from 'styled-components';

const JokeListTitle = styled.h3`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};
`;

export default JokeListTitle;
