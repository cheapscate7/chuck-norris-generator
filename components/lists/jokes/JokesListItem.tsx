import styled, { css } from 'styled-components';
import UnorderedListItem from '../UnorderedListItem';
import React from 'react';

interface IJokesListItemProps {}

const JokesListItem: React.FC = ({ children }) => {
    return (
        <UnorderedListItem>
            <a>
                <Title>{children}</Title>
            </a>
        </UnorderedListItem>
    );
};

export default JokesListItem;

const Title = styled.h3`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};
`;
